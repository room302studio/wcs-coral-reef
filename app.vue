<template>
  <div>
    <div id="bg-gradient">
    </div>
    <div id="bg-gradient-2"></div>



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
.active {
  background-color: #8054FF;
  color: white;
  font-weight: 700;
}

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

.teal {
  color: #5CF3E1;
}

/* give links a background color of #8054FF, remove underline, make text white, and round corners */
/* a {
  background-color: #443fe5;
  color: white;
  text-decoration: none;
  border-radius: 4px;
} */

a {
  color: #8054FF;
}

/* links with an image inside them should not have a background color */
/* a img {
  background-color: transparent !important;
} */
/* that doesn't work because we need to set the transparent on the a tag, not the img tag */
/* instead, we'll just set the background color to white */


ul li {
  margin-top: 1.25rem;
}
</style>