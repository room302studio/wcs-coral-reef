<template>
  <Globe :state="stateRef" :setState="setState" class="vh-100" />
</template>
<script setup>
import { geoCentroid } from "d3-geo";
import { transition, easeQuadInOut, interpolate } from "d3";
const stateRef = ref({});
function setState(next) {
  stateRef.value = next(stateRef.value);
}
// state.selectedBCUID

const emit = defineEmits(["update:bcu"]);

watch(
  () => {
    return stateRef.value.selectedBCUID;
  },
  (newState) => {
    // console.log("state changed", newState);

    emit("update:bcu", newState);
  }
);

// Watch and use data to kick off centroids animations
watch(
  () => stateRef.value.goodCompromiseBCUsData,
  (goodCompromiseBCUsData) => {
    if (goodCompromiseBCUsData && goodCompromiseBCUsData !== "LOADING") {
      // console.log(goodCompromiseBCUsData.features);
      // Calculate the centroids
      const centroids = goodCompromiseBCUsData.features
        .map((feature) => ({
          centroid: geoCentroid(feature),
          id: feature.properties.BCUID,
        }))
        .filter(({ centroid }) => !centroid.some(Number.isNaN))
        // then sort by latitude
        .sort((a, b) => a.centroid[0] - b.centroid[0]);
      // Rotate to Centroids
      let currentCentroidIndex = 0;
      setInterval(() => {
        const { centroid, id } = centroids[currentCentroidIndex];
        const oldRotate = stateRef.value.rotate;
        const newRotate = [-centroid[0], -centroid[1]];
        const interpolator = interpolate(oldRotate, newRotate);

        // console.log("id", id);
        // Rotate to that centroid
        // setState((state) => ({
        //   ...state,
        //   rotate:
        //   scale: 2000,
        // }));
        // Create a transition
        const t = transition().duration(800).ease(easeQuadInOut);
        // // Use the transition to rotate the projection
        // const rotate = projection.rotate();
        t.tween("rotate", () => {
          return (t) => {
            const rotate = interpolator(t);
            setState((state) => ({
              ...state,
              rotate,
              scale: 2000,
            }));
            // newRotate[1] = Math.max(-180, Math.min(180, newRotate[1]));
            // newRotate[1] = 0;
            // projection.rotate(newRotate);
            // projection.scale(1000);
            // svg.selectAll("path").attr("d", path);
            // update circle positions
            // svg
            //   .selectAll("circle")
            //   .data(centroids)
            //   .attr("cx", (d) => path.centroid(d)[0])
            //   .attr("cy", (d) => path.centroid(d)[1]);
          };
        });
        currentCentroidIndex = (currentCentroidIndex + 1) % centroids.length;
      }, 2000);
    }
  }
);
</script>
