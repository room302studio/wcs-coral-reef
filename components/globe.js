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

// This represents the circle of the entire globe.
const sphere = { type: "Sphere" };

const worldAtlasURL =
  "https://unpkg.com/visionscarto-world-atlas@0.1.0/world/110m.json";

// Sensitivity of panning and zooming
// const sensitivity = 58;
const sensitivity = 72;

// Framework-agnostic implementation of a spinny globe.
export const globe = (container, { state, setState }) => {
  // SVG setup
  const svg = select(container).selectAll("svg").data([null]).join("svg");

  // Assumes the state has width and height,
  // measured from the container element.
  const { width, height, activeId } = state;

  // SVG scaling
  svg.attr("width", width).attr("height", height);

  // Fit the initial projection to the size of the container
  if (!state.initialScale) {
    console.log("      Fitting initial projection to container size.");
    const initialScale = projection.fitSize([width, height], sphere).scale();
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
    console.log("      Loading 50Reefs_good_compromise_BCUs.json.");
    setState((state) => ({
      ...state,
      goodCompromiseBCUsData: "LOADING",
    }));
    fetch("/50Reefs_data_extract/50Reefs_good_compromise_BCUs.json")
      // fetch("/Reefs70_min_attribute.json")
      // fetch("/Reefs70_min_attribute.r2.json")
      .then((response) => response.json())
      .then((topojsonData) => {
        console.log("topojsonData", topojsonData);
        // console.log(goodCompromiseBCUsData);
        // console.log(feature(goodCompromiseBCUsData));
        // console.log(topojsonData.objects);
        // console.log("feature", feature);

        const goodCompromiseBCUsData = feature(
          topojsonData,
          topojsonData.objects["50Reefs_good_compromise_BCUs"]
          // topojsonData.objects["Reefs70_min_attribute"]
        );
        console.log("goodCompromiseBCUsData", goodCompromiseBCUsData);

        setState((state) => ({
          ...state,
          goodCompromiseBCUsData,
        }));
      });
    return;
  }

  // Wait for it to load
  if (state.goodCompromiseBCUsData === "LOADING") {
    return;
  }

  // Load in the world atlas data
  if (!state.worldAtlasData) {
    fetch(worldAtlasURL)
      .then((response) => response.json())
      .then((topojsonData) => {
        // console.log("topojsonData", topojsonData);
        const worldAtlasData = feature(topojsonData, topojsonData.objects.land);
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

  // Render the sphere
  svg

    .selectAll("path.sphere")
    .data([sphere])
    .join("path")
    .attr("class", "sphere")
    .attr("d", path)
    // .attr("fill", "#003d53");
    // make semi-transparent
    .attr("fill", "rgba(0, 61, 83, 0.88)");

  // Render graticules (lines around the globe)
  svg
    .selectAll("path.graticule")
    .data([null])
    .join("path")
    .attr("class", "graticule")
    .attr("d", path(graticule()))
    .attr("stroke", "#005979")
    .attr("fill", "none");

  // Render shapes from state.worldAtlasData
  svg
    .selectAll("path.worldAtlas")
    .data(state.worldAtlasData.features)
    .join("path")
    .attr("class", "worldAtlas")
    .attr("d", path)
    // .attr("stroke", "black")
    // .attr("fill", "#ffedd9");
    .attr("fill", "#011129");

  const colorScale = scaleOrdinal(schemeCategory10);

  // console.log(state.goodCompromiseBCUsData.features);
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
      if (!d.properties.BCUID) {
        return;
      }
      // console.log(d.properties.BCUID);
      setState((state) => ({
        ...state,
        selectedBCUID: d.properties.BCUID,
      }));
    });

  svg
    .selectAll("path.boundingbox")
    .data(state.goodCompromiseBCUsData.features)
    .join("path")
    .attr("class", "boundingbox")
    // .attr("d", path.bounds)
    .attr("d", (d) => {
      // get the bounding box of the BCU
      const [[x0, y0], [x1, y1]] = path.bounds(d);
      return `M${x0},${y0}L${x1},${y0}L${x1},${y1}L${x0},${y1}Z`;
    })
    .attr("stroke", "yellow")
    .attr("fill", "none")
    .attr("opacity", (d) => (d.properties.BCUID === activeId ? 1 : 0.3));

  /* now we need to draw big circles on the map at the centroids of the BCUs */

  // svg
  //   .selectAll("circle")
  //   .data(centroids)
  //   .join("circle")
  //   .attr("cx", (d) => d[0])
  //   .attr("cy", (d) => d[1])
  //   .attr("r", 25)
  //   .attr("opacity", 0.5)
  //   // .attr("fill", "black");
  //   // but lets use the same fill colors as the BCUs
  //   .attr("stroke", (d, i) =>
  //     colorScale(state.goodCompromiseBCUsData.features[i].properties.BCUID)
  //   );

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

  // console.log("scale", state.scale);

  // // Support panning
  // svg.call(
  //   // Inspired by https://vizhub.com/curran/8373d190b0f14dd89c07b44cf1baa9f9
  //   dragHandler.on("drag", (event) => {
  //     // Get the current rotation and scale
  //     const rotate = projection.rotate();
  //     const scale = projection.scale();

  //     // Compute the new rotation
  //     const k = sensitivity / scale;
  //     const newRotate = [rotate[0] + event.dx * k, rotate[1] - event.dy * k];

  //     // Update the state
  //     setState((state) => ({
  //       ...state,
  //       rotate: newRotate,
  //     }));
  //   })
  // );

  // // Support zooming
  // svg.call(
  //   zoomHandler.on("zoom", ({ transform: { k } }) => {
  //     setState((state) => ({
  //       ...state,
  //       scale: state.initialScale * k,
  //     }));
  //   })
  // );

  /* start a request animation frame that slowly rotates the globe as long as the mouse is not down */
  // if (!state.mouseDown) {
  //   requestAnimationFrame(() => {
  //     setState((state) => ({
  //       ...state,
  //       rotate: [
  //         state.rotate[0] + 0.4,
  //         state.rotate[1],
  //         state.rotate[2],
  //       ],
  //     }));
  //   });
  // }

  // // set the mouseDown state to true when the mouse is down
  // svg.on("mousedown", () => {
  //   setState((state) => ({
  //     ...state,
  //     mouseDown: true,
  //   }));
  // })

  // // set the mouseDown state to false when the mouse is up
  // svg.on("mouseup", () => {
  //   setState((state) => ({
  //     ...state,
  //     mouseDown: false,
  //   }));
  // });
};
