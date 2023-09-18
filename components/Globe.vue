<template>
  <div class="globe-container" ref="globeDiv" style="height: 900px"></div>
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
watch(() => props.state, render);

// On mounted
onMounted(() => {
  const { setState } = props;
  // Measure the initial width and height of globeDiv
  const { width } = globeDiv.value.getBoundingClientRect();
  const height = 900;
  //   console.log({ width, height });

  // Trigger initial render
  //   console.log("calling setState from child");
  setState((state) => ({
    ...state,
    width,
    height,
  }));

  // Measure width and height of globeDiv using resize observer
  // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
  const resizeObserver = new ResizeObserver((entries) => {
    // for (let entry of entries) {
    // const { width, height } = entry.contentRect;
    const { width } = globeDiv.value.getBoundingClientRect();
    setState((state) => ({
      ...state,
      width,
      // height,
    }));
    // }
  });

  resizeObserver.observe(globeDiv.value);

  // Clean up
  return () => {
    resizeObserver.disconnect();
  };
});
</script>
<style>
.globe-container {
  width: 100%;
  height: 500px;
  /* background-color: #003d53; */
  position: relative;
}

.globe-container svg {
  position: absolute;
  /* background-color: rgb(172, 172, 172); */
}
</style>
