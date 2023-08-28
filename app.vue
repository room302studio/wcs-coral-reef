<template>
<div>
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

.section {
  min-height: 66vh;
  margin-top: 22vh;
  margin-bottom: 22vh;
}
</style>