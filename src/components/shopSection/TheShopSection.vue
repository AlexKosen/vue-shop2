<script>
import ThePopupVue from '../popup/ThePopup.vue';
import TheShopSectionItem from '../shopSection/TheShopSectionItem.vue'

export default {
components: {
  TheShopSectionItem
},
props: {
  product_info: {
    type: Object,
    default() {
      {}
    }
  },
  product_prime_info: {
    type: Object,
    default() {
      {}
    }
  }
}

}
</script>

<template>
      <section class="shop_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Latest Watches
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6 ">
          <div class="box">
            <a href="">
              <div class="img-box">
                <img src="images/w1.png" alt="">
              </div>
              <div class="detail-box">
                <h6>
                  {{ product_prime_info.name}}
                </h6>
                <h6>
                  Price:
                  <span>
                    ${{ product_prime_info.price }}
                  </span>
                </h6>
              </div>
              <div class="new">
                <span>
                  Featured
                </span>
              </div>
            </a>
          </div>
        </div>
        <TheShopSectionItem v-for="item in product_info"
        :key="item.article"
        :product="item"
        />
      </div>
      <div class="btn-box">
        <!-- <a href="">
          View All
        </a> -->
      </div>
    </div>
  </section>
</template>