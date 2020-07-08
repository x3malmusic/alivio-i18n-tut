<template>
  <button
    :class="collapse ? 'burger-btn change' : 'burger-btn'"
    @click="$emit('click')"
  >
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </button>
</template>

<script>
export default {
  name: "BurgerButton",
  props: {
    collapse: Boolean,
  },
};
</script>

<style lang="scss">
@import "burger-button";
</style>
