<template>
  <svg ref="globeSVG"></svg>
</template>
<script setup>
import { select } from "d3-selection";
import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";
import { drag } from "d3-drag";

const width = 960;
const height = 500;
const sensitivity = 58;

const globeSVG = ref(null);

onMounted(() => {
  const svg = select(globeSVG.value)
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

  const projection = geoOrthographic();

  const path = geoPath().projection(projection);

  const graticule = geoGraticule();
  const graticulePath = svg
    .append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path)
    .attr("stroke", "#bbb")
    .attr("fill", "none");
  const render = () => graticulePath.attr("d", path);
  svg.call(
    // Inspired by https://vizhub.com/curran/8373d190b0f14dd89c07b44cf1baa9f9
    drag().on("drag", (event) => {
      const rotate = projection.rotate();
      const scale = projection.scale();
      const k = sensitivity / scale;
      projection.rotate([rotate[0] + event.dx * k, rotate[1] - event.dy * k]);
      render();
    })
  );
});
</script>
