<script>
import TheHeader from "../components/headerSection/TheHeader.vue";
import TheSlider from "../components/sliderSection/TheSlider.vue";
import TheShopSection from "../components/shopSection/TheShopSection.vue";
import TheAboutSection from "../components/aboutSection/TheAboutSection.vue";
import TheFutureSection from "../components/futureSection/TheFutureSection.vue";
import TheContactSection from "../components/contactSection/TheContactSection.vue";
import TheClientSection from "../components/clientSection/TheClientSection.vue";
import TheFooter from "../components/footerSection/TheFooter.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    TheHeader,
    TheSlider,
    TheShopSection,
    TheAboutSection,
    TheFutureSection,
    TheContactSection,
    TheClientSection,
    TheFooter,
  },
  data() {
    return {
      sliderItem: [
        {
          id: 1,
          title: "Smart Watches",
          subTitle:
            "Aenean scelerisque felis ut orci condimentum laoreet. Integer nisnisl, convallis et augue sit amet, lobortis semper quam. ",
          img: "slider-img.png",
        },
        {
          id: 2,
          title: "Smart Watches",
          subTitle:
            "Aenean scelerisque felis ut orci condimentum laoreet. Integer nisnisl, convallis et augue sit amet, lobortis semper quam. ",
          img: "slider-img.png",
        },
        {
          id: 3,
          title: "Smart Watches",
          subTitle:
            "Aenean scelerisque felis ut orci condimentum laoreet. Integer nisnisl, convallis et augue sit amet, lobortis semper quam. ",
          img: "slider-img.png",
        },
      ],


    };
  },

  computed: {
    ...mapGetters(["PRODUCTS",])
  },

  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API",]),

  },

  mounted() {
   this.GET_PRODUCTS_FROM_API();
   
  },
};
</script>

<template>
  <div class="hero_area">
    <div class="hero_social">
      <a href="">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <a href="">
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="">
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </div>
    <!-- header section strats -->
    <TheHeader />
    <!-- end header section -->
    <!-- slider section -->
    <TheSlider :slider_data="sliderItem" />
    <!-- end slider section -->
  </div>

  <!-- shop section -->

  <TheShopSection 
  :product_info="PRODUCTS"
  />

  <!-- end shop section -->

  <!-- about section -->

  <TheAboutSection />

  <!-- end about section -->

  <!-- feature section -->

  <TheFutureSection />

  <!-- end feature section -->

  <!-- contact section -->

  <TheContactSection />

  <!-- end contact section -->

  <!-- client section -->
  <TheClientSection />
  <!-- end client section -->

  <!-- footer section -->
  <TheFooter />
  <!-- footer section -->
</template>

<style></style>
