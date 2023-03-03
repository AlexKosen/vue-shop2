<script>
import TheClientSliderSection from '../sliderSection/TheClientSliderSection.vue';

export default {
  components: {
    TheClientSliderSection,
  },
  data() {
    return {
      clients: [
        {name: 'Mark Thomas', position: 'Customer', photo: 'c1.jpg',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlaboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugia'},
        {name: 'Alina Hans', position: 'Customer', photo: 'c2.jpg',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlaboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugia'},                   
      ]
    }
  },
}
</script>
<template>
      <section class="client_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Testimonial
        </h2>
      </div>
      <div class="carousel-wrap ">
        <div class="owl-carousel client_owl-carousel">
          <TheClientSliderSection
            :client_items="clients"
          />
        </div>
      </div>
    </div>
  </section>
</template>