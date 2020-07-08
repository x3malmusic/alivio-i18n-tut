<template>
  <header>
    <div
      class="header d-flex align-items-center justify-content-between section-width"
    >
      <a class="logo" href="#">{{ $t("Header.logo") }}</a>
      <div
        class="menu-collapsible d-flex align-items-center w-100 justify-content-end"
        :class="collapse && 'menu-active'"
      >
        <ul class="d-flex p-0 flex-grow-1">
          <li
            v-for="link in $t('Header.links')"
            :key="link.text"
            class="mr-xl-5 mr-sm-3 mr-lg-3"
          >
            <a href="#">{{ link.text }}</a>
          </li>
        </ul>
        <app-button :name="$t('Header.button')" />
      </div>
      <burger-button @click="showMenu" :collapse="collapse" />
    </div>
  </header>
</template>

<script>
import AppButton from "../Button/Button";
import BurgerButton from "../BurgerButton/BurgerButton";

export default {
  name: "MainHeader",
  components: {
    AppButton,
    BurgerButton,
  },
  data: () => ({
    collapse: false,
  }),
  methods: {
    showMenu() {
      this.collapse = !this.collapse;
    },
  },
};
</script>

<style lang="scss">
@import "header";
</style>
