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
        }
    },
    components: {
      Carousel,
      Slide,
      Navigation,
    },
  })
</script>

<template>
    <Carousel :items-to-show="2" :wrap-around="true" :autoplay="2000" snapAlign="start">
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
  padding: 10px;
}
.client_section {
.detail-box {
  text-align: center;
  }
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  background: var(--vc-nav-background);
  border-radius: var(--vc-nav-border-radius);
  width: var(--vc-nav-width);
  height: var(--vc-nav-height);
  text-align: center;
  font-size: var(--vc-nav-height);
  padding: 0;
  color: var(--vc-nav-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 0;
  cursor: pointer;
  margin: 0 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
  