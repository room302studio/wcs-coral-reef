<template>
  <div id="section-5" class="section w-100 cf">
    <h1>{{title}}</h1>
    <div class="cf">
      <div class="w-50 fl">
        How they resist
      </div>

      <div class="w-50 fl">
        <h2>Intro graf</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempore quae repudiandae voluptate, impedit
          possimus magnam eos voluptas at, natus saepe blanditiis vero incidunt eum recusandae officia, expedita
          consequuntur molestias?</p>
      </div>
    </div>

    <div>
      <h2>Where</h2>

      <!-- make a 2x3 grid of map locations -->
      <div class="cf">
        <div class="w-third fl">
          <h3>Location 1</h3>
          <img class="w-100 h5" style="background-color: #CCC;" />
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> -->
        </div>
        <div class="w-third fl">
          <h3>Location 2</h3>
          <img class="w-100 h5" style="background-color: #CCC;" />
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> -->
        </div>
        <div class="w-third fl">
          <h3>Location 3</h3>
          <img class="w-100 h5" style="background-color: #CCC;" />
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> -->
        </div>
        <div class="w-third fl">
          <h3>Location 4</h3>
          <img class="w-100 h5" style="background-color: #CCC;" />
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> -->
        </div>
        <div class="w-third fl">
          <h3>Location 5</h3>
          <img class="w-100 h5" style="background-color: #CCC;" />
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> -->
        </div>
        <div class="w-third fl">
          <h3>Location 6</h3>
          <img class="w-100 h5" style="background-color: #CCC;" />
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> -->
        </div>
      </div>

      <div>
        <h2>Case Study</h2>
        <div class="cf">
          <div class="w-50 fl">
            Satellite photo
          </div>

          <div class="w-50 fl">
            Ocean photo slideshow
          </div>
        </div>

        <div class="pa5 w-100">
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
