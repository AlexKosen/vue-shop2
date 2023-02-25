<script>
import TheSliderItem from "./TheSliderItem.vue";
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    TheSliderItem,
    Carousel,
    Slide,
    Pagination,
  },

  data() {
    return {};
  },
});
</script>

<template>
  <section class="slider_section">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div id="customCarousel1" class="carousel slide" data-ride="carousel">
          <Carousel :autoplay="2000" :wrap-around="true" :transition="1500">
            <Slide
              v-for="(slide, index) in 3"
              :key="slide"
              :currentSlide="index"
            >
              <TheSliderItem />
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.carousel__pagination {
  position: unset;
  margin: 0px;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
}

.carousel__pagination-button {
  position: unset;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  border-radius: 100%;
  outline: 0 !important;
  ::-moz-focus-outer,
  ::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
}
.carousel__pagination-button::after {
  background-color: rgb(255, 255, 255);
  width: 15px;
  height: 15px;
  border-radius: 100%;
  opacity: 1;
}
.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  width: 23px;
  height: 23px;
  background-color: #f0d43a;
  position: unset;
  justify-content: center;
  align-items: center;
}
</style>
