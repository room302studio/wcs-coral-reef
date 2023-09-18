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
      <!-- button to showCaseStudy -->
      <button @click="showCaseStudy = !showCaseStudy"
        class="w-100 w-third-ns pa2 pa3-l extra-dark-blue bg-white br2 pointer dim ba b--white bw2">Show Case
        Study</button>

      <div class="cf">
        <div v-for="location in locations" class="w-third pv2 pr2 break-word overflow-hidden fl">
          <h3 class="mv0 pv1 ph0 f3 fw1">{{ location.name }}</h3>
          <SatelliteImage :lat="location.lat" :lng="location.lng" class="w-100 h5" />
        </div>
      </div>



      <div v-if="showCaseStudy" class="case-study-container flex justify-center items-center">
        <CaseStudy class="w-100 w-two-thirds-l" :lat="locations[0].lat" :lng="locations[0].lng" :title="locations[0].name"
          :headline="locations[0].name" :headline-image="headlineImage" :copy="locations[0]?.copy"
          @close="showCaseStudy = false" />
      </div>


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

const showCaseStudy = ref(false)
</script>
<style scoped>
/* this should be a big modal pop-up with 10% margin on each side */
.case-study-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0,0,0,0.5); */
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;

  z-index: 100;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>