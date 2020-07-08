<template>
  <footer class="footer">
    <div class="section-width d-flex align-items-center">
      <a class="logo" href="#">{{ $t("Header.logo") }}</a>
      <ul class="p-0 m-auto">
        <li
          v-for="link in $t('Header.links')"
          :key="link.text"
          class="mr-xl-5 mr-3 mr-lg-3"
        >
          <a href="#">{{ link.text }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style lang="scss">
@import "footer";
</style>
