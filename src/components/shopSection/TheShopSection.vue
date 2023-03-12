<script>
import TheShopSectionItem from "../shopSection/TheShopSectionItem.vue";

export default {
  components: {
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

        <TheShopSectionItem
          v-for="item in product_info"
          :key="item.article"
          :product="item"
        />
      </div>
      <div class="btn-box">
        <RouterLink class="nav-link" 
          :to="{ name: 'watches' }" 
        >View All</RouterLink>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>

</style>