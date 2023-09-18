<template>
  <Globe :state="stateRef" :setState="setState" class="pa2 pa4-l vh-100" />
</template>
<script setup>
import { geoCentroid } from "d3-geo";
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
        .map((feature) => geoCentroid(feature))
        .filter((centroid) => !centroid.some(Number.isNaN))
        // then sort by latitude
        .sort((a, b) => a[0] - b[0]);

      // Rotate to Centroids
      let currentCentroidIndex = 0;
      setInterval(() => {
        const centroid = centroids[currentCentroidIndex];
        console.log("centroid", centroid);

        // Rotate to that centroid
        setState((state) => ({
          ...state,
          rotate: [-centroid[0], -centroid[1]],
          scale: 2000,
        }));

        // // Create a transition
        // const t = transition().duration(10000).ease(easeQuadInOut);

        // // Use the transition to rotate the projection
        // const rotate = projection.rotate();
        // const interpolator = interpolate(rotate, [-centroid[0], -centroid[1]]);

        // t.tween("rotate", () => {
        //   return (t) => {
        //     const newRotate = interpolator(t);
        //     // newRotate[1] = Math.max(-180, Math.min(180, newRotate[1]));
        //     newRotate[1] = 0;
        //     projection.rotate(newRotate);
        //     projection.scale(1000);
        //     svg.selectAll("path").attr("d", path);
        //     // update circle positions
        //     // svg
        //     //   .selectAll("circle")
        //     //   .data(centroids)
        //     //   .attr("cx", (d) => path.centroid(d)[0])
        //     //   .attr("cy", (d) => path.centroid(d)[1]);
        //   };
        // });

        currentCentroidIndex = (currentCentroidIndex + 1) % centroids.length;
      }, 1000);
    }
  }
);
</script>
