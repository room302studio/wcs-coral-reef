<template>
  <div class="globe-container" ref="globeDiv"></div>
</template>
<script setup>
const globeDiv = ref(null);

const state = ref({});

function setState(next) {
  state.value = next(state.value);
}

watch(state, (next) => {
  console.log("state", state.value);
  useGlobe(globeDiv.value, { state: next, setState });
});

// On mounted
onMounted(() => {
  // Measure the initial width and height of globeDiv
  const { width, height } = globeDiv.value.getBoundingClientRect();

  // Trigger initial render
  setState((state) => ({
    ...state,
    width,
    height,
  }));

  // Measure width and height of globeDiv using resize observer
  // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const { width, height } = entry.contentRect;
      setState((state) => ({
        ...state,
        width,
        height,
      }));
    }
  });

  resizeObserver.observe(globeDiv.value);
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
