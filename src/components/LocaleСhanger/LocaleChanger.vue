<template>
  <div class="locale-changer" @click="changeLocale">{{ lang }}</div>
</template>

<script>
export default {
  name: "LocaleChanger",
  data: () => ({
    en: true,
  }),
  methods: {
    changeLocale() {
      this.en = !this.en;
      if (this.en) {
        return (this.$i18n.locale = "en");
      } else {
        return (this.$i18n.locale = "ru");
      }
    },
  },
  computed: {
    lang() {
      if (this.en) {
        return "RU";
      } else {
        return "EN";
      }
    },
  },
};
</script>

<style lang="scss">
@import "locale-changer";
</style>
