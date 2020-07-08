<template>
  <button class="button">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    name: String,
    width: Number,
  },
};
</script>

<style lang="scss">
@import "button";
</style>
