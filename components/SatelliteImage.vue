<template>
  <img :src="computedUrl" class="br3"/>
</template>

<script setup>
const { lat, lng } = defineProps({
  lat: String,
  lng: String,
});

const zoom = 5;

const computedUrl = computed(() => {
  // https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/0,0,2/600x600?access_token=pk.eyJ1IjoiZWpmb3giLCJhIjoiY2lyZjd0bXltMDA4b2dma3JzNnA0ajh1bSJ9.iCmlE7gmJubz2RtL4RFzIw
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lng},${lat},${zoom}/600x460?access_token=pk.eyJ1IjoiZWpmb3giLCJhIjoiY2lyZjd0bXltMDA4b2dma3JzNnA0ajh1bSJ9.iCmlE7gmJubz2RtL4RFzIw`;
});
</script>

<style>


</style>