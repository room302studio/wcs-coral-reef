<template>
  <div id="section-5" class="section w-100 cf">
    <h1>{{ title }}</h1>
    <div class="cf">
      <div class="w-100 w-50-ns fl-ns">
        <p>

        </p>
      </div>

      <div class="w-100 w-50-ns fl-ns">
        <h2>How Coral Reefs Resist Climate Change</h2>
        <p>These are reefs that, despite being exposed to warmer waters due to climate change, have evolved adaptations
          that allow them to resist bleaching events.</p>
      </div>
    </div>

    <div>
      <h2>Where</h2>

      <!-- make a 2x3 grid of map locations -->
      <div class="cf">
        <div class="w-third break-word overflow-hidden fl">
          <h3>Location 1</h3>
          <img class="w-100 h5" style="background-color: #CCC;" />
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> -->
        </div>
        <div class="w-third break-word overflow-hidden fl">
          <h3>Location 2</h3>
          <img class="w-100 h5" style="background-color: #CCC;" />
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> -->
        </div>
        <div class="w-third break-word overflow-hidden fl">
          <h3>Location 3</h3>
          <img class="w-100 h5" style="background-color: #CCC;" />
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> -->
        </div>
        <div class="w-third break-word overflow-hidden fl">
          <h3>Location 4</h3>
          <img class="w-100 h5" style="background-color: #CCC;" />
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> -->
        </div>
        <div class="w-third break-word overflow-hidden fl">
          <h3>Location 5</h3>
          <img class="w-100 h5" style="background-color: #CCC;" />
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> -->
        </div>
        <div class="w-third break-word overflow-hidden fl">
          <h3>Location 6</h3>
          <img class="w-100 h5" style="background-color: #CCC;" />
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> -->
        </div>
      </div>

      <div>
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
      </div>
    </div>

  </div>
</template>
<script setup>
const { title } = defineProps({
  title: String,
})

</script>
