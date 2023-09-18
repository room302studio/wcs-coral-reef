<template>
  <section class="casestudy-container white cf extra-dark-blue-bg">

    <div class="w-100 flex justify-center items-center pr4" ref="modal">
      <div class="casestudy-text-content w-100 w-two-thirds-l fl-l pa2 pa4-l ">
        <button @click="emit('close')"
          class="w-100 w-third-ns pa2 pa3-l  extra-dark-blue bg-white bn br2 pointer dim">Close</button>
        <h1>{{ title }}</h1>

        <div>
          <img :src="headlineImage" class="br2" />
        </div>

        <!-- <h2>{{ headline }}</h2> -->
        <!-- <p>{{ copy }}</p> -->
        <div class="f4 lh-copy">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam ultricies, nunc nisl
        </p>
        </div>
        


      </div>

      <div class="w-100 w-third-l fl-l">
        <CaseStudySatelliteImage :lat="lat" :lng="lng" class="" />
      </div>

      <!-- close button -->

    </div>

  </section>
</template>

<script setup>
const emit = defineEmits(['close'])

const modal = ref(null)

const { height } = useElementSize(modal)
const { lat, lng, title, headline, copy, headlineImage } = defineProps({
  lat: Number,
  lng: Number,
  title: String,
  headline: String,
  copy: String,
  headlineImage: String
})
</script>

<style scoped></style>