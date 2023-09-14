<template>
  <Globe :state="stateRef" :setState="setState" class="br4 ba b--white" style="background-color: rgba(255,255,255,0.2)" />
</template>
<script setup>
const stateRef = ref({});
function setState(next) {
  stateRef.value = next(stateRef.value);
}
// state.selectedBCUID

const emit = defineEmits(["update:bcu"]);

watch(
  () => {
    return stateRef.value.selectedBCUID;
  },
  (newState) => {
    console.log("state changed", newState);
    emit("update:bcu", newState);
  }
);
</script>
