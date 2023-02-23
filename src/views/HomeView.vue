<script>
import TheHeader from '../components/headerSection/TheHeader.vue';
import TheSlider from '../components/sliderSection/TheSlider.vue'
import TheShopSection from '../components/shopSection/TheShopSection.vue';
import TheAboutSection from '../components/aboutSection/TheAboutSection.vue'
import TheFutureSection from '../components/futureSection/TheFutureSection.vue'
import TheContactSection from '../components/contactSection/TheContactSection.vue'
import TheClientSection from '../components/clientSection/TheClientSection.vue'
import TheFooter from '../components/footerSection/TheFooter.vue'

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
      sliderItems: [
        {id: 1, name: 'img1', img: 'slider-img.png'},
        {id: 2, name: 'img2', img: 'slider-img.png'},
        {id: 3, name: 'img3', img: 'slider-img.png'},
        {id: 4, name: 'img4', img: 'slider-img.png'},
        {id: 5, name: 'img5', img: 'slider-img.png'},
      ]
    }
  },
}

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
    <TheHeader/>
    <!-- end header section -->
    <!-- slider section -->
    <TheSlider
      :carousel_data="sliderItems"
      :interval="3000"
      :slideWidth="600"
    />
    <!-- end slider section -->
  </div>

  <!-- shop section -->

  <TheShopSection/>

  <!-- end shop section -->

  <!-- about section -->

  <TheAboutSection/>

  <!-- end about section -->

  <!-- feature section -->

  <TheFutureSection/>

  <!-- end feature section -->

  <!-- contact section -->

  <TheContactSection/>

  <!-- end contact section -->

  <!-- client section -->
  <TheClientSection/>
  <!-- end client section -->

  <!-- footer section -->
  <TheFooter/>
  <!-- footer section -->
</template>

<style>
</style>