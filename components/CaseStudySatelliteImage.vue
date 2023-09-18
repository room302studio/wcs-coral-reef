<template>
  <!-- <img :src="computedUrl" class="br3"/> -->
  <!-- use tachyons to ensure aspect ratio is 1x1 -->
  <div class="">
    <img :src="computedUrl" class="w-100"/>
  </div>
</template>

<script setup>
const { lat, lng, height } = defineProps({
  lat: String,
  lng: String,
  height: Number
});

const zoom = 8;

// we need to compute the width based on the height
// we want to maintain a 16:9 ratio
const width = computed(() => {
  // return Math.round(height * 16 / 9)
  return 600
});

const computedUrl = computed(() => {
  // https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/0,0,2/600x600?access_token=pk.eyJ1IjoiZWpmb3giLCJhIjoiY2lyZjd0bXltMDA4b2dma3JzNnA0ajh1bSJ9.iCmlE7gmJubz2RtL4RFzIw
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lng},${lat},${zoom}/592x1280?access_token=pk.eyJ1IjoiZWpmb3giLCJhIjoiY2lyZjd0bXltMDA4b2dma3JzNnA0ajh1bSJ9.iCmlE7gmJubz2RtL4RFzIw`;
  // return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lng},${lat},${zoom}/${width.value}x${height}?access_token=pk.eyJ1IjoiZWpmb3giLCJhIjoiY2lyZjd0bXltMDA4b2dma3JzNnA0ajh1bSJ9.iCmlE7gmJubz2RtL4RFzIw`;
});
</script>

<style>


</style>