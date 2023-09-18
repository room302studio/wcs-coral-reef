<template>
  <section class="casestudy-container white cf extra-dark-blue-bg">

    <div class="w-100 w-two-thirds-l center pa0 cf">
      <div class="casestudy-text-content w-100 w-two-thirds-l fl-l pa2 pa4-l pv6-l">
        <button @click="emit('close')"
          class="w-100 w-third-ns pa2 pa3-l  extra-dark-blue bg-white bn br2 pointer dim"
        >Close</button>
        <h1>{{ title }}</h1>
        <h2>{{ headline }}</h2>
        <p>{{ copy }}</p>
      </div>

      <div class="w-100 w-third-l fl-l ba b--pink">
        <CaseStudySatelliteImage :lat="lat" :lng="lng" class="ba b--purple"/>
      </div>

      <!-- close button -->

    </div>

  </section>
</template>

<script setup>
const emit = defineEmits(['close'])

/*
        <CaseStudy
          :lat="locations[0].lat"
          :lng="locations[0].lng"
          :title="locations[0].name"
          :headline="locations[0].name"
          :copy="locations[0].name"
          @close="showCaseStudy = false"
          />*/

const { lat, lng, title, headline, copy } = defineProps({
  lat: Number,
  lng: Number,
  title: String,
  headline: String,
  copy: String
})
</script>

<style scoped></style>