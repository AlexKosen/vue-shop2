<script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  import "vue3-carousel/dist/carousel.css";
  
  
  export default defineComponent({
    name: 'WrapAround',
    props: {
        client_items: {
            type: Array,
            default() {
                return []
            }
        },
    },
    data() {
      return {
        widthScreen: 2
      }
    },
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    methods: {
      checkWidthScreen() {
        if(window.innerWidth < 768) {
          this.widthScreen = 1
        } else {
          this.widthScreen = 2
        }
      }
    },
    mounted() {
      this.checkWidthScreen();
      window.addEventListener('resize', this.checkWidthScreen)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkWidthScreen)
    },
  })
</script>

<template>
    <Carousel :items-to-show="widthScreen" :wrap-around="true" :autoplay="2000" snapAlign="start">
      <Slide v-for="slide in client_items" :key="slide">
        <div class="carousel__item">
            <div class="item">
            <div class="box">
              <div class="img-box">
                <img :src="'images/' + slide.photo" alt="img">
              </div>
              <div class="detail-box">
                <div class="client_info">
                  <div class="client_name">
                    <h5>
                      {{ slide.name }}
                    </h5>
                    <h6>
                      {{ slide.position }}
                    </h6>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p> {{ slide.review }} </p>
              </div>
            </div>
          </div>
        
        </div>
      </Slide>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel> 
</template>

<style lang="scss" >
  .carousel__slide {
  padding: 5px;
}
.client_section {
.detail-box {
  text-align: center;
  }
}


</style>
  