<script>
import TheShopSectionItem from "../shopSection/TheShopSectionItem.vue";
import TheShopSectionPrimeProductItem from "../shopSection/TheShopSectionPrimeProductItem.vue";

export default {
  components: {
    TheShopSectionItem,
    TheShopSectionPrimeProductItem,
    TheShopSectionItem,
  },
  props: {
    product_info: {
      type: Object,
      default() {
        {
        }
      },
    },
    product_prime_info: {
      type: Object,
      default() {
        {
        }
      },
    },
  },
};
</script>

<template>
  <section class="shop_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>Latest Watches</h2>
      </div>

      <div class="row">
        
          <TheShopSectionPrimeProductItem
            v-for="item in product_prime_info"
            :key="item.article"
            :product_prime_info_item="item"
          />

        <TheShopSectionItem
          v-for="item in product_info"
          :key="item.article"
          :product="item"
        />
      </div>
      <div class="btn-box">
        <a href=""> View All </a>
      </div>
    </div>
  </section>
</template>
