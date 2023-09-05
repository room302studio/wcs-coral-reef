import { select } from "d3-selection";
import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { drag } from "d3-drag";
import { zoom } from "d3-zoom";
import { feature } from "topojson-client";

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

const worldAtlasURL =
  "https://unpkg.com/visionscarto-world-atlas@0.1.0/world/110m.json";

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

  // If the data is not loaded for public/50Reefs_data_extract/50Reefs_good_compromise_BCUs.json
  // then load it.
  if (!state.goodCompromiseBCUsData) {
    fetch("/50Reefs_data_extract/50Reefs_good_compromise_BCUs.json")
      .then((response) => response.json())
      .then((topojsonData) => {
        // console.log(goodCompromiseBCUsData);
        // console.log(feature(goodCompromiseBCUsData));

        // console.log("feature", feature);

        const goodCompromiseBCUsData = feature(
          topojsonData,
          topojsonData.objects["50Reefs_good_compromise_BCUs"]
        );
        // console.log("goodCompromiseBCUsData", goodCompromiseBCUsData);

        setState((state) => ({
          ...state,
          goodCompromiseBCUsData,
        }));
      });
    return;
  }

  // Load in the world atlas data
  if (!state.worldAtlasData) {
    fetch(worldAtlasURL)
      .then((response) => response.json())
      .then((topojsonData) => {
        // console.log("topojsonData", topojsonData);
        const worldAtlasData = feature(
          topojsonData,
          topojsonData.objects.countries
        );
        // console.log("worldAtlasData", worldAtlasData);

        setState((state) => ({
          ...state,
          worldAtlasData,
        }));
      });
    return;
  }

  // Update projection rotation based on state
  projection.rotate(state.rotate);
  projection.scale(state.scale);

  // Render graticules (lines around the globe)
  // svg
  //   .selectAll("path.graticule")
  //   .data([null])
  //   .join("path")
  //   .attr("class", "graticule")
  //   .attr("d", path(graticule()))
  //   .attr("stroke", "red")
  //   .attr("fill", "none");

  // Render shapes from state.worldAtlasData
  svg
    .selectAll("path.worldAtlas")
    .data(state.worldAtlasData.features)
    .join("path")
    .attr("class", "worldAtlas")
    .attr("d", path)
    // .attr("stroke", "black")
    .attr("fill", "#ffedd9");

  const colorScale = scaleOrdinal(schemeCategory10);

  console.log(state.goodCompromiseBCUsData.features);
  // Render shapes from state.goodCompromiseBCUsData
  svg
    .selectAll("path.goodCompromiseBCUs")
    .data(state.goodCompromiseBCUsData.features)
    .join("path")
    .attr("class", "goodCompromiseBCUs")
    .attr("d", path)
    // .attr("stroke", "black")
    .attr("fill", (d) => colorScale(d.properties.BCUID))
    .on("click", (_, d) => {
      console.log(d.properties.BCUID);
      setState((state) => ({
        ...state,
        selectedBCUID: d.properties.BCUID,
      }));
    });

  /* 
        <path
      v-for="county in features"
      :key="'county'+county.id"
      :class="['county-boundary']"
      :d="projectedGeoPath(county)"
      :transform-origin="`${projectedGeoPath.centroid(county)[0]}px ${
        projectedGeoPath.centroid(county)[1]
      }px`"
      :id="county.id"
      :fill="countyColorByCountyFips.get(county.id)"
      :stroke-width="strokeWidth"
      stroke="black"
      @click="onFeatureClick(county, 'county', county.id)"
    />

    */

  console.log("scale", state.scale);

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
