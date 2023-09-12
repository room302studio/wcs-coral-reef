<template>
  <div>
    <div id="bg-gradient">
    </div>
    <div id="bg-gradient-2"></div>

    <div id="floating-nav" class="fixed right-1 top-1 bg-white pa2 w-10 f6 br2">
      <h4 class="ma0 pa0">Navigation</h4>
      <ul class="pa0 mt2 mb0 list">
        <li class="mv2">Introduction</li>
        <li class="mv2">Global temperature rise</li>
        <li class="mv2">Impact on world and oceans</li>
        <li class="mv2">Ocean reef percentage</li>
        <li class="mv2">Reef type breakdown</li>
        <li class="mv2">Reef type: resist</li>
        <li class="mv2">Reef type: recover</li>
        <li class="mv2">Reef type: avoid</li>
        <li class="mv2">Explore them all</li>
        <li class="mv2">Call to action</li>
      </ul>
    </div>

    <NuxtPage />
  </div>
</template>
<script setup>
import { enableToast } from '~/plugins/toast'

const { $toast } = useNuxtApp()

onMounted(() => {
  enableToast()

  // let hello = $toast.success('Hello World')

  // force dismiss hello
  // hello.dismiss()
})
</script>
<style>
/* use Figtree font for everything */
body {
  font-family: 'Figtree', sans-serif;
  font-size: 24px;
}

/* create a very beautiful subtle animation background gradient that slowly changes over time, reminiscent of ocean waves */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
    /* rotate: 18deg; */
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes gradient2 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
    rotate: -32deg;
  }

  100% {
    background-position: 0% 50%;
  }
}

body {
  background: linear-gradient(180deg, #020E18 0%, #006794 100%);
}

/* #bg-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(270deg, #00dbde, #fff, #00dbde, #fff);
  background-size: 900% 900%;
  animation: gradient 30s linear infinite;
  mix-blend-mode: multiply;
}

#bg-gradient-2 {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background: linear-gradient(270deg, #0082de, #fff, #00dbde, #fff5cb);
  background-size: 400% 400%;
  animation: gradient2 60s linear infinite;
  mix-blend-mode: multiply;
} */


/* tachyon color overrides based on figma */
.light-blue {
  color: #99CDFF
}

/* give links a background color of #8054FF, remove underline, make text white, and round corners */
a {
  background-color: #443fe5;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

ul li {
  margin-top: 1.25rem;
}
</style>