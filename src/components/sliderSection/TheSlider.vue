<script>
import TheSliderItem from "./TheSliderItem.vue";
import TheCarouselIndicators from "./TheCarouselIndicators.vue"
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { ref } from 'vue'
import "vue3-carousel/dist/carousel.css";


export default defineComponent({
  name: "Autoplay",
  components: {
    TheSliderItem,
    TheCarouselIndicators,
    Carousel,
    Slide,
    Pagination,
  },
 
  data() {
    return {
      myCarousel: ref(null),
      isActive: false,
      currentSlide: 0
    }
  },
  
  methods: {
    slideTo(numb) {
      console.log(this.currentSlide)
      // this.isActive = !this.isActive
      console.log(this.myCarousel.next())
    }
    
  },

  mounted() {
    
  },
});
</script>

<template>
  <section class="slider_section">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div id="customCarousel1" class="carousel slide" data-ride="carousel">
          <Carousel
            ref="myCarousel"
            v-model="currentSlide" 
            :autoplay="2000" 
            :wrap-around="true" 
            :transition="1500">

            <Slide v-for="slide in 3" 
            :key="slide"
            >
              <TheSliderItem />
            </Slide>

            <template #addons>
              <ol class="carousel-indicators">
                <TheCarouselIndicators
                v-model="currentSlide"
                v-for="indicators in 3"
                :key="indicators" 
                :class="{ active: isActive }"
                @click="slideTo"           
                />
                </ol>
            </template>
          </Carousel>


          
        </div>
      </div>
    </div>
  </section>
</template>


