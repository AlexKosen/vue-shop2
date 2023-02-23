<script>
import TheSliderItem from './TheSliderItem.vue';

export default {
    components: { TheSliderItem },
    data() {
      return {
        currentSlideIndex: 0
      }
    },
    props: {
        carousel_data: {
            type: Array,
            default() {
                return []
            }
        },
        interval: {
            type: Number,
            default: 0
        },
        slideWidth: {
            type: Number,
            default: 600
        }
    },
    methods: {
      prevSlide() {
        if(this.currentSlideIndex > 0) {
            this.currentSlideIndex--;
        }
      },
      nextSlide() {
        if(this.currentSlideIndex >= this.carousel_data.length-1) {
            this.currentSlideIndex = 0
        } else {
            this.currentSlideIndex++;
        }

      }  
    },
    mounted() {
        if(this.interval > 0) {
            setInterval(() => {
                this.nextSlide()
            }, this.interval)
        }
        
    }
}
</script>


<template>
    <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container-fluid ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Smart Watches
                    </h1>
                    <p>
                      Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div class="wrapper-carousel">
                <div class="the-carousel" :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%'}">
                <TheSliderItem
                  v-for="item in carousel_data"
                  :key="item.id"
                  :item_data="item"
                  :imageSlide="true"
                  :width="slideWidth"
                />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>

    </section>
</template>

<style lang="scss">
.wrapper-carousel{
  max-width: 600px;
  overflow: hidden;
  margin: 0 auto;
}
.the-carousel {
  display: flex;
  transition: all ease .5s;
}

</style>