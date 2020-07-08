<template>
  <div id="app" class="app">
    <main-header />
    <router-view />
    <main-footer />
    <locale-changer />
  </div>
</template>

<script>
import MainHeader from "./components/Header/Header";
import MainFooter from "./components/Footer/Footer";
import LocaleChanger from "./components/LocaleСhanger/LocaleChanger";

export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter,
    LocaleChanger,
  },
};
</script>
