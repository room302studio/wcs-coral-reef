<template>
  <Globe :state="stateRef" :setState="setState" />
</template>
<script setup>
const stateRef = ref({});
function setState(next) {
  stateRef.value = next(stateRef.value);
}
</script>
