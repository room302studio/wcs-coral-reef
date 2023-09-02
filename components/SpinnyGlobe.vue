<template>
  <Globe :state="stateRef" :setState="setState" />
</template>
<script setup>
const stateRef = ref({});

function setState(next) {
  console.log("in setState");
  const nextState = next(stateRef.value);
  // console.log("Old: ", stateRef.value.state);
  // console.log("New: ", nextState);
  stateRef.value = nextState;
}
</script>
