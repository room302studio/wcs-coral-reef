<template>
  <div>
    <canvas id="topographic-canvas" ref="topographicCanvas" class="ba bw2 b--red w-100 fixed top-0 left-0 z-0 o-50" :width="width" :height="height" />
  </div>
</template>
<script setup>

import * as d3 from 'd3';
import { Noise, samples } from '~~/helpers'
import { useWindowScroll, useElementSize} from '@vueuse/core'

// const width = 1920
// const height = 1080
// const width = ref(1920)
// const height = ref(1080)

const { width, height } = useWindowSize()

const q = 3

const period = 0.005

const n = Math.ceil(width.value / q) + 1
const m = Math.ceil(height.value / q) + 1

const projection = d3.geoIdentity().translate([-q / 2, -q / 2]).scale(q)

const contours = d3.contours().size([n, m])

const noise = new Noise(3)

const grid = new Float64Array(n * m);

for (let j = 0; j < m; ++j) {
  for (let i = 0; i < n; ++i) {
    grid[j * n + i] = noise.noise(i * period, j * period);
  }
}

const topographicCanvas = ref(null)

onMounted(() => {
  const color = d3.scaleSequential(d3.interpolateGreys).domain(d3.extent(grid))
  const context = topographicCanvas.value.getContext('2d');
  const path = d3.geoPath(projection, context);

  const { y } = useWindowScroll()
  const { height: pageHeight } = useElementSize(document.body)

  watch(y, (newY) => {
  const linesToDraw = Math.floor((newY / pageHeight.value) * m)
  if(!linesToDraw) return

  // check if we are scrolling upwards, if we are, we need to clear
  // the canvas and redraw the lines
  if(linesToDraw < m) context.clearRect(0, 0, width.value, height.value)
  for (let i = 0; i < linesToDraw; i++) {
    const value = grid[i]
    if(!value) continue
    context.beginPath();
    path(contours.contour(grid, value));
    context.strokeStyle = 'rgba(0,0,0,0.25)';
    context.stroke();
  }
  })
})
</script>