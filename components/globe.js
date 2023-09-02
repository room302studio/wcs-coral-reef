import { select } from "d3-selection";
import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";
import { drag } from "d3-drag";

// This module implements a spinny globe.
// It is a component that renders into a container element.
// Based on a combination of:
//  - https://github.com/curran/vite-d3-template/blob/main/viz/index.js
//  - https://vizhub.com/curran/8373d190b0f14dd89c07b44cf1baa9f9

const projection = geoOrthographic();
const path = geoPath().projection(projection);
const graticule = geoGraticule();
const dragHandler = drag();

// Sensitivity of panning and zooming
const sensitivity = 58;

export function globe(container, { state, setState }) {
  // SVG setup
  const svg = select(container).selectAll("svg").data([null]).join("svg");

  // SVG scaling
  // Assumes the state has width and height,
  // measured from the container element.
  svg.attr("width", state.width).attr("height", state.height);

  // Update projection rotation based on state
  if (state.rotate) {
    projection.rotate(state.rotate);
  }

  // Render graticules (lines around the globe)
  svg
    .selectAll("path.graticule")
    .data([null])
    .join("path")
    .attr("class", "graticule")
    .attr("d", path(graticule()))
    .attr("stroke", "#bbb")
    .attr("fill", "none");

  // Support panning and zooming
  svg.call(
    // Inspired by https://vizhub.com/curran/8373d190b0f14dd89c07b44cf1baa9f9
    dragHandler.on("drag", (event) => {
      // Get the current rotation and scale,
      // or use the default values if none are set.
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
}
