<script>
import TheCarouselItem from './TheSlider.vue';

export default {
    components: {
        TheCarouselItem,
    },
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
            default: 200
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
    <div class="wrapper-carousel">
        <div class="the-carousel"
        :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%'}"
        >
            <TheCarouselItem
                v-for="item in carousel_data" 
                :key="item.id"
                :item_data="item"
                :imageSlide="true"
                :width="slideWidth"
            >
                <p>{{ item.name }}</p>
                <p>{{ item.id }}</p>
            </TheCarouselItem>
        </div>
        <button class="the-carousel-btn" @click="prevSlide">Prev</button>
        <button class="the-carousel-btn" @click="nextSlide">Next</button>
    </div>

</template>

<style lang="scss">
    .wrapper-carousel {
        max-width: 200px;
        overflow: hidden;
        margin: 0 auto;
    }
    .the-carousel {
        display: flex;
        transition: all ease .5s;
    }
    .the-carousel-btn {
        margin: 4px;
    }
</style>