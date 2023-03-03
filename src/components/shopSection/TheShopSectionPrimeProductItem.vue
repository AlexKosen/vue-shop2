<script>
import ThePopupShopSectionVue from "../popup/ThePopupShopSection.vue";
export default {
  props: {
    product_prime_info_item: {
      type: Object,
      default() {
        {
        }
      },
    },
  },
  data() {
    return {
      isInfoPopupVisible: false,
    };
  },
  components: {
    ThePopupShopSectionVue,
  },
  methods: {
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
  },
};
</script>

<template>
  <div class="col-md-6">
    <div class="box">
      <ThePopupShopSectionVue
        v-if="isInfoPopupVisible"
        :rightBtnTitle="'To cart'"
        @closePopup="closeInfoPopup"
      >
        <div class="img-box">
          <img :src="'images/' + product_prime_info_item.image" alt="" />
        </div>
        <div class="img-box__descript">
          <h6 class="img-box__title">
            {{ product_prime_info_item.name }}
          </h6>
          <h6 class="img-box__price">
            Price:
            <span> ${{ product_prime_info_item.price }} </span>
          </h6>
          <p>{{ product_prime_info_item.description }}</p>
        </div>
      </ThePopupShopSectionVue>
      <div class="img-box" @click="showPopupInfo">
        <img :src="'images/' + product_prime_info_item.image" alt="" />
      </div>
      <div class="detail-box">
        <h6>
          {{ product_prime_info_item.name }}
        </h6>
        <h6>
          Price:
          <span> ${{ product_prime_info_item.price }} </span>
        </h6>
      </div>
      <div class="new">
        <span> Featured </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.img-box {
  min-width: 200px;
}
.img-box:hover {
  cursor: pointer;
}
.img-box {
  &__descript {
    padding: 3px;
  }
  &__title,
  &__price {
    font-weight: 600;
  }
}

.the-btn_show-info {
  display: inline-block;
  padding: 3px 25px;
  background-color: #f0d43a;
  color: #ffffff;
  font-size: 0.8rem;
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid #f0d43a;
}
.the-btn_show-info:hover {
  background-color: #f8b22f;
  border: 1px solid #f8b22f;
}
</style>
