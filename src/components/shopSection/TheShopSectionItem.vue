<script>
import { mapActions } from "vuex";
import ThePopupShopSection from "../popup/ThePopupShopSection.vue";
import TheCart from "../cart/TheCart.vue";
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
    TheCart,
  },
  data() {
    return {
      isInfoPopupVisible: false,
      isCartVisible: false,
      isProductPrime: false
    };
  },
  computed: {
    productPrime() {
      if(this.product.products_prime) {
        return this.isProductPrime = true
      } else {
        return this.isProductPrime  = false
      }
    }
  },
  
  methods: {
    ...mapActions(["ADD_TO_CART"]),

    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
    addToCart(data) {
      this.isInfoPopupVisible = false;
      this.isCartVisible = true;
      document.body.classList.add('popup-open');
      this.ADD_TO_CART(data)
    },
    closeCart() {
      this.isCartVisible = false;
      document.body.classList.remove('popup-open');
    }
  },
};
</script>

<template>
  <div class="col-sm-6" :class="{'col-xl-3': !productPrime}">
    <div class="box">
      <ThePopupShopSection
        v-if="isInfoPopupVisible"
        :rightBtnTitle="'Buy!'"
        :productItem="product"
        @closePopup="closeInfoPopup"
        @addToCart="addToCart"
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

      <TheCart v-if="isCartVisible"
        @closeCart="closeCart"
      />

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
body.popup-open {
    overflow: hidden; /* Убираем полосы прокрутки на странице */
  }
</style>
