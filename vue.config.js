const path = require("path");

module.exports = {
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "src")],
        },
        prependData: `@import "./src/assets/styles/main.scss";
                      @import '~bootstrap/scss/_functions';
                      @import '~bootstrap/scss/_variables';
                      @import '~bootstrap/scss/mixins/_breakpoints';
                     `,
      },
    },
  },
  assetsDir: "@/assets/",
};
