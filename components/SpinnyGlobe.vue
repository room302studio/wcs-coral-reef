<template>
  <Globe :state="stateRef" :setState="setState" class="pa2 pa4-l vh-100" />
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
    // console.log("state changed", newState);
    emit("update:bcu", newState);
  }
);
</script>
