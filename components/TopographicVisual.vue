<template>
  <div>
    <canvas id="topographic-canvas" ref="topographicCanvas" class="w-100 fixed top-0 left-0 o-60" :width="width"
      :height="height" :style="{
        transform: `scale(${canvasScale})`,
        transformOrigin: 'center center',
      }"></canvas>
  </div>
</template>
<script setup>

import * as d3 from 'd3';
import { Noise, samples } from '~~/helpers'
import { useWindowScroll, useElementSize, useDebounceFn } from '@vueuse/core'

// const width = 1920
// const height = 1080
// const width = ref(1920)
// const height = ref(1080)

const { width, height } = useWindowSize()

const q = 3.1

const period = 0.008
const octaves = 4.5

const scrollMultiplier = ref(0.5);


const n = Math.ceil(width.value / q) + 1
const m = Math.ceil(height.value / q) + 1

const projection = d3.geoIdentity().translate([-q / 2, -q / 2]).scale(q)

const contours = d3.contours().size([n, m])

const noise = new Noise(octaves)

const grid = new Float64Array(n * m);

for (let j = 0; j < m; ++j) {
  for (let i = 0; i < n; ++i) {
    grid[j * n + i] = noise.noise(i * period, j * period);
  }
}

const topographicCanvas = ref(null)

let lastY = ref(0);
let context = ref(null);

const { y } = useWindowScroll()

const { height: pageHeight } = useElementSize(document.body)

// we are going to slowly scale up the canvas from 1 to 1.25 using a quadratic ease out
const canvasScale = computed(() => {
  // use y to find how far down the page we are

  const scrollProgress = (y.value / pageHeight.value) * scrollMultiplier.value

  // we want to scale up from 1 to 1.25
  const scaleStart = 1
  const scaleEnd = 1.5

  // we want to scale up for the entire duration of the page
  const duration = 1 * scrollMultiplier.value

  // we want to scale up using a quadratic ease out
  const ease = (t) => t * (2 - t)

  // we want to scale up for the entire duration of the page
  const t = scrollProgress / duration

  // we want to scale up using a quadratic ease out
  const scaledT = ease(t)

  // we want to scale up from 1 to 1.25
  const scale = scaleStart + (scaleEnd - scaleStart) * scaledT

  return scale
})

// Define the offset as a reactive value so it can be easily tweaked later
const offset = 0.08

onMounted(() => {
  context.value = topographicCanvas.value.getContext('2d');
  const path = d3.geoPath(projection, context.value);

  const { height: pageHeight } = useElementSize(document.body)

  watch(y, (newY) => {
    // Adjust the newY and lastY values by the offset
    const adjustedNewY = newY - offset * pageHeight.value;
    const adjustedLastY = lastY.value - offset * pageHeight.value;

    if (adjustedNewY > adjustedLastY) {
      const linesToDraw = Math.floor(adjustedNewY / pageHeight.value * m);
      drawLines(linesToDraw, Math.floor(adjustedLastY / pageHeight.value * m), path);
    } else {
      // context.value.clearRect(0, 0, width.value, height.value);
    }
    lastY.value = newY;
  });

  // Draw lines up to the current scroll position on mount
  nextTick(() => {
    // Adjust the y value by the offset
    const adjustedY = y.value - offset * pageHeight.value;
    drawLines(Math.floor(adjustedY / pageHeight.value * m), 0, path);
  });
});

function drawLines(to, from = 0, path) {
  // draw a white box with opacity of 0.1
  context.value.fillStyle = 'rgba(255,255,255,0.0025)';
  // context.value.fillRect(0, 0, width.value, height.value);
  for (let i = from; i < to; i++) {
    const value = grid[i];
    if (!value) continue;
    context.value.beginPath();
    path(contours.contour(grid, value));
    context.value.strokeStyle = 'rgba(0,0,0,0.25)';
    context.value.stroke();
  }
}
</script>
<style scoped>
#topographic-canvas,
canvas {
  z-index: -10;
}
</style>