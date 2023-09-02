<template>
  <div class="globe-container" ref="globeDiv"></div>
</template>
<script setup>
import { defineProps, watch } from "vue";
import { globe } from "./globe";

const props = defineProps(["state", "setState"]);

const globeDiv = ref(null);

const render = () => {
  if (globeDiv.value) {
    const { state, setState } = props;
    globe(globeDiv.value, { state, setState });
  }
};

// watch(() => props.state, render);

// Watch and use new value
watch(
  () => props.state,
  (newState) => {
    render();
    // console.log("in watch");
    // console.log("Old: ", state);
    // console.log("New: ", newState);
    // setState((state) => ({
    //   ...state,
    //   ...newState,
    // }));
  }
);

// On mounted
onMounted(() => {
  // Measure the initial width and height of globeDiv
  const { width, height } = globeDiv.value.getBoundingClientRect();
  //   console.log({ width, height });

  // Trigger initial render
  console.log("calling setState from child");
  props.setState((state) => ({
    ...state,
    width,
    height,
  }));

  // // Measure width and height of globeDiv using resize observer
  // // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
  // const resizeObserver = new ResizeObserver((entries) => {
  //   for (let entry of entries) {
  //     const { width, height } = entry.contentRect;
  //     setState((state) => ({
  //       ...state,
  //       width,
  //       height,
  //     }));
  //   }
  // });

  // resizeObserver.observe(globeDiv.value);

  // // Clean up
  // return () => {
  //   resizeObserver.disconnect();
  // };
});
</script>
<style>
.globe-container {
  width: 100%;
  height: 500px;
  /* background-color: blue; */
  position: relative;
}

.globe-container svg {
  position: absolute;
  /* background-color: red; */
}
</style>
