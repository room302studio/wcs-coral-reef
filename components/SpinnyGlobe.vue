<template>
  <Globe :state="stateRef" :setState="setState" />
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
