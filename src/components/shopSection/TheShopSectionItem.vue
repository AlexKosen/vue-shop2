<script>
import ThePopupShopSection from "../popup/ThePopupShopSection.vue";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    ThePopupShopSection,
  },
  data() {
    return {
      isInfoPopupVisible: false,
    };
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
  <div class="col-sm-6 col-xl-3">
    <div class="box">
      <ThePopupShopSection
        v-if="isInfoPopupVisible"
        :popupTitle="product.name"
        :rightBtnTitle="'To cart'"
        @closePopup="closeInfoPopup"
      >
        <div class="img-box">
          <img :src="'images/' + product.image" alt="img" />
        </div>
        <div class="img-box__descript">
          <h6 class="img-box__title">
            {{ product.name }}
          </h6>
          <h6 class="img-box__price">
            Price:
            <span> $ {{ product.price }} </span>
          </h6>
          <p>{{ product.description }}</p>
        </div>
      </ThePopupShopSection>

      <div class="img-box" @click="showPopupInfo">
        <img :src="'images/' + product.image" alt="img" />
      </div>
      <div class="detail-box">
        <h6>
          {{ product.name }}
        </h6>
        <h6>
          Price:
          <span> ${{ product.price }} </span>
        </h6>
      </div>
      <div class="new" v-if="product.statusNovetely">
        <span> New </span>
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
</style>
