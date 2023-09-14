<template>
  <div id="section-5" class="section w-100 cf">
    <h1>{{ title }}</h1>

    <div class="cf">
      <img class="w-100 w-50-ns fl br2" src="/images/Emily%20Darling.Borneo.2018%20(12).jpg" />

      <div class="w-100 w-50-ns fl-ns pl4">
        <h3 class="w-100 mv0 pv0">
          {{ headline }}
        </h3>
        <p>{{ copy }}</p>
      </div>
    </div>

    <div>
      <h2>Where</h2>
      <!-- make a 2x3 grid of map locations -->
      <div class="cf">
        <div class="w-third pa2 break-word overflow-hidden fl">
          <h3 class="mv0 pv1">Location 1</h3>
          <!-- <img class="w-100 h5" style="background-color: #CCC;" /> -->
          <SatelliteImage lat="40" lng="-100" class="w-100 h5" />
        </div>
        <div class="w-third pa2 break-word overflow-hidden fl">
          <h3 class="mv0 pv1">Location 2</h3>
          <!-- <img class="w-100 h5" style="background-color: #CCC;" /> -->
          <SatelliteImage lat="20" lng="-120" class="w-100 h5" />
        </div>
        <div class="w-third pa2 break-word overflow-hidden fl">
          <h3 class="mv0 pv1">Location 3</h3>
          <SatelliteImage lat="20" lng="-120" class="w-100 h5" />
        </div>
        <div class="w-third pa2 break-word overflow-hidden fl">
          <h3 class="mv0 pv1">Location 4</h3>
          <SatelliteImage lat="-20" lng="120" class="w-100 h5" />
        </div>
        <div class="w-third pa2 break-word overflow-hidden fl">
          <h3 class="mv0 pv1">Location 5</h3>
          <SatelliteImage lat="3" lng="-40" class="w-100 h5" />
        </div>
        <div class="w-third pa2 break-word overflow-hidden fl">
          <h3 class="mv0 pv1">Location 6</h3>
          <SatelliteImage lat="10" lng="-99" class="w-100 h5" />
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
const { title, headline, copy } = defineProps({
  title: String,
  headline: String,
  copy: String,
})
</script>
