<template>
  <svg ref="globeSVG"></svg>
</template>
<script setup>
import { select } from "d3-selection";
import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";

const width = 960;
const height = 500;

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

  svg
    .append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path)
    .attr("stroke", "#bbb")
    .attr("fill", "none");
});
</script>
