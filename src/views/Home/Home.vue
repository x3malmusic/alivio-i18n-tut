<template>
  <div>
    <!--    section-1-->
    <div class="position-relative">
      <section class="home section-width">
        <div class="main-bg w-100 h-100"></div>
        <div class="home-main-text">
          <h1>{{ $t("HomePage.section1.h1") }}</h1>
          <p>{{ $t("HomePage.section1.text") }}</p>
          <app-button :name="$t('HomePage.section1.button')" />
        </div>
      </section>
    </div>
    <!--    section-1 END-->

    <!--    section-2-->
    <section class="how-it-works section-width">
      <strong>{{ $t("HowItWorks.article.name") }}</strong>
      <div class="d-flex justify-content-between section-2-text">
        <h2 class="col-md-5 col-12 col-lg-6">
          {{ $t("HowItWorks.article.description") }}
        </h2>
        <p class="col-md-5 col-12 col-lg-5 d-flex align-items-center">
          {{ $t("HowItWorks.article.text") }}
        </p>
      </div>
      <div
        class="d-flex justify-content-between card-container align-items-center"
      >
        <div
          :class="`card text-center ${card.align}`"
          v-for="card in $t('HowItWorks.blocks')"
        >
          <img
            :src="getNumImage(card.numberImage)"
            alt="img"
            class="position-absolute numImage"
          />
          <h3>{{ card.name }}</h3>
          <p>{{ card.text }}</p>
          <img :src="getImage(card.image)" alt="img" class="image" />
        </div>
      </div>
    </section>
    <!--    section-2 END-->

    <!--    section-3-->
    <section class="about w-100">
      <div class="section-width">
        <div class="d-flex align-items-center about-content">
          <div class="col-12 col-md-5 about-text">
            <h2>{{ $t("About.story") }}</h2>
            <p>{{ $t("About.text") }}</p>
            <app-button :name="$t('About.button')" />
          </div>
          <img
            src="../../assets/images/video.png"
            alt="img"
            class="col-12 col-md-7"
          />
        </div>
      </div>
    </section>
    <!--    section-3 END-->

    <!--    section-4-->
    <section class="our-product section-width">
      <div class="d-flex align-items-center m-auto our-product-container">
        <div class="position-relative col-12 col-md-6 h-100">
          <img
            src="../../assets/images/our-product-img.png"
            alt="img"
            class="our-product-img"
          />
          <img
            src="../../assets/images/our-product-card.png"
            alt="img"
            class="our-product-card-img img-fluid"
          />
        </div>
        <div class="col-12 col-md-6 our-product-text">
          <p>{{ $t("OurProduct.name") }}</p>
          <h2>{{ $t("OurProduct.h2") }}</h2>
          <p>{{ $t("OurProduct.text") }}</p>
          <app-button :name="$t('OurProduct.button')" />
        </div>
      </div>
    </section>
    <!--    section-4 END-->
  </div>
</template>

<script>
import AppButton from "../../components/Button/Button";

export default {
  name: "Home",
  components: { AppButton },
  methods: {
    getImage(img) {
      return require(`../../assets/images/${img}.png`);
    },
    getNumImage(img) {
      return require(`../../assets/images/${img}.png`);
    },
  },
};
</script>

<style lang="scss">
@import "home";
</style>
