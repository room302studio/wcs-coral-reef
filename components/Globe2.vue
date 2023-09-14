<template>
  <div class="globe-container" ref="container">
    <svg :width="width" :height="height">
      <path v-for="feature in state.worldAtlasData.features" :key="feature.id" class="worldAtlas"
        :d="pathGenerator(feature)" fill="#011129"></path>
      <path v-for="feature in state.goodCompromiseBCUsData?.features" :key="feature.id" class="goodCompromiseBCUs"
        :d="pathGenerator(feature)" :fill="colorScale(feature.properties.BCUID)"
        @click="selectBCUID(feature.properties.BCUID)"></path>
    </svg>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, watchEffect } from "vue";
import { transition, easeQuadInOut, interpolate } from "d3";
import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { drag } from "d3-drag";
import { zoom } from "d3-zoom";
import { feature } from "topojson-client";

const state = reactive({
  rotate: [0, 0],
  scale: 1000,
  initialScale: 0,
  goodCompromiseBCUsData: null,
  worldAtlasData: null,
});

const container = ref(null);
const width = ref(0);
const height = ref(0);
const colorScale = scaleOrdinal(schemeCategory10);

const projection = geoOrthographic();
const pathGenerator = geoPath().projection(projection);
const dragHandler = drag();
const zoomHandler = zoom();
const worldAtlasURL =
  "https://unpkg.com/visionscarto-world-atlas@0.1.0/world/110m.json";
const sensitivity = 72;

onMounted(() => {
  const svg = select(container.value).select("svg");

  watchEffect(() => {
    svg.attr("width", width.value).attr("height", height.value);
  });

  const calculateCentroids = () => {
    if (state.goodCompromiseBCUsData) {
      const centroids = state.goodCompromiseBCUsData.features
        .map((feature) => pathGenerator.centroid(feature))
        .filter((centroid) => !centroid.some(Number.isNaN))
        .sort((a, b) => a[1] - b[1]);
      console.log("centroids", centroids);

      let currentCentroidIndex = 0;
      setInterval(() => {
        const centroid = centroids[currentCentroidIndex];
        const t = transition().duration(6000).ease(easeQuadInOut);
        const rotate = projection.rotate();
        const interpolator = interpolate(rotate, [-centroid[0], -centroid[1]]);

        t.tween("rotate", () => {
          return (t) => {
            const newRotate = interpolator(t);
            newRotate[1] = Math.max(-180, Math.min(180, newRotate[1]));
            projection.rotate(newRotate);
            projection.scale(1000);
            svg.selectAll("path").attr("d", pathGenerator);
          };
        });

        currentCentroidIndex = (currentCentroidIndex + 1) % centroids.length;
      }, 6000);
    }
  };


  svg.call(
    dragHandler.on("drag", (event) => {
      const rotate = projection.rotate();
      const scale = projection.scale();
      const k = sensitivity / scale;
      const newRotate = [rotate[0] + event.dx * k, rotate[1] - event.dy * k];
      state.rotate = newRotate;
    })
  );

  svg.call(
    zoomHandler.on("zoom", ({ transform: { k } }) => {
      state.scale = state.initialScale * k;
    })
  );

  onMounted(() => {
    width.value = container.value.offsetWidth;
    height.value = container.value.offsetHeight;
    state.initialScale = projection
      .fitSize([width.value, height.value], { type: "Sphere" })
      .scale();
  });

  fetch("/50Reefs_data_extract/50Reefs_good_compromise_BCUs.json")
    .then((response) => response.json())
    .then((topojsonData) => {
      state.goodCompromiseBCUsData = feature(
        topojsonData,
        topojsonData.objects["50Reefs_good_compromise_BCUs"]
      );
      calculateCentroids();
    });

  fetch(worldAtlasURL)
    .then((response) => response.json())
    .then((topojsonData) => {
      state.worldAtlasData = feature(
        topojsonData,
        topojsonData.objects.countries
      );
    });

});

function selectBCUID(BCUID) {
  if (BCUID) {
    state.selectedBCUID = BCUID;
  }
}
</script>

<style>
.globe-container {
  width: 100%;
  height: 500px;
  position: relative;
}

.globe-container svg {
  position: absolute;
}
</style>