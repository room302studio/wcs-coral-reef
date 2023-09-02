import { select } from "d3-selection";
import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";
import { drag } from "d3-drag";
import { zoom } from "d3-zoom";

// This module implements a spinny globe.
// It is a component that renders into a container element.
// Based on a combination of:
//  - https://github.com/curran/vite-d3-template/blob/main/viz/index.js
//  - https://vizhub.com/curran/8373d190b0f14dd89c07b44cf1baa9f9

const projection = geoOrthographic();
const path = geoPath().projection(projection);
const graticule = geoGraticule();
const dragHandler = drag();
const zoomHandler = zoom();

// Sensitivity of panning and zooming
const sensitivity = 58;

// Framework-agnostic implementation of a spinny globe.
export const globe = (container, { state, setState }) => {
  // SVG setup
  const svg = select(container).selectAll("svg").data([null]).join("svg");

  // Assumes the state has width and height,
  // measured from the container element.
  const { width, height } = state;

  // SVG scaling
  svg.attr("width", width).attr("height", height);

  // Fit the initial projection to the size of the container
  if (!state.initialScale) {
    console.log("      Fitting initial projection to container size.");
    const initialScale = projection
      .fitSize([width, height], { type: "Sphere" })
      .scale();
    setState((state) => ({
      ...state,
      initialScale,
      scale: initialScale,
      rotate: projection.rotate(),
    }));
    return;
  }

  // Update projection rotation based on state
  projection.rotate(state.rotate);
  projection.scale(state.scale);

  // Render graticules (lines around the globe)
  svg
    .selectAll("path.graticule")
    .data([null])
    .join("path")
    .attr("class", "graticule")
    .attr("d", path(graticule()))
    .attr("stroke", "red")
    .attr("fill", "none");

  // Support panning
  svg.call(
    // Inspired by https://vizhub.com/curran/8373d190b0f14dd89c07b44cf1baa9f9
    dragHandler.on("drag", (event) => {
      // Get the current rotation and scale
      const rotate = projection.rotate();
      const scale = projection.scale();

      // Compute the new rotation
      const k = sensitivity / scale;
      const newRotate = [rotate[0] + event.dx * k, rotate[1] - event.dy * k];

      // Update the state
      setState((state) => ({
        ...state,
        rotate: newRotate,
      }));
    })
  );

  // Support zooming
  svg.call(
    zoomHandler.on("zoom", ({ transform: { k } }) => {
      setState((state) => ({
        ...state,
        scale: state.initialScale * k,
      }));
    })
  );
};
