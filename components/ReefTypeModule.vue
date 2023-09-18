<template>
  <div id="section-5" class="section w-100 cf">
    <h1>{{ title }}</h1>

    <div class="cf">
      <!-- <img class="w-100 w-50-ns fl br2" :src="`/images/Emily%20Darling.Borneo.2018.jpg`" /> -->
      <img class="w-100 w-50-ns fl br2" :src="headlineImage" />

      <div class="w-100 w-50-ns fl-ns pl4">
        <h3 class="w-100 mv0 pv0">
          {{ headline }}
        </h3>
        <p>{{ copy }}</p>
      </div>
    </div>

    <div>
      <h2>Examples</h2>
      <div class="cf">
        <div v-for="location in locations" class="w-third pa2 break-word overflow-hidden fl">
          <h3 class="mv0 pv1 f3 fw1">{{ location.name }}</h3>
          <SatelliteImage :lat="location.lat" :lng="location.lng" class="w-100 h5" />
        </div>
      </div>

      <!-- <div>
        <h2>Case Study</h2>
        <div class="cf">
          <div class="w-100 w-50-ns fl-ns">
            Satellite photo
          </div>

          <div class="w-100 w-50-ns fl-ns">
            Ocean photo slideshow
          </div>
        </div>

        <div class="pv2 pv5-l ph5-l w-100">
          What makes it special
        </div>
      </div> -->
    </div>

  </div>
</template>
<script setup>
const { title, headline, copy, headlineImage } = defineProps({
  title: String,
  headline: String,
  copy: String,
  locations: Array,
  headlineImage: String
})
</script>
