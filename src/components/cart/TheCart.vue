<script>
import { mapGetters, mapActions } from "vuex";
import TheCartItem from "./TheCartItem.vue";
export default {
  components: {
    TheCartItem,
  },

  props: {
    popupTitle: {
      type: String,
      default: "Cart",
    },
  },

  computed: {
    ...mapGetters(["CART"]),
  },
  cartTotalCost() {
    if (this.CART.length) {
      let rezult = [];
      for (let item of this.CART) {
        rezult.push(item.quantity * item.price);
      }
      rezult = rezult.reduce(function (sum, current) {
        return sum + current;
      }, 0);
      return rezult
    } else {
      rezult = 0
    }
  },

  methods: {
    closeCart() {
      this.$emit("closeCart");
    },
  },

  mounted() {
    document.addEventListener("click", (item) => {
      if (item.target === this.$refs["popup_wrapper"]) {
        this.closePopup();
      }
    });
  },
};
</script>

<template>
  <div class="popup-wrapper" ref="popup_wrapper">
    <div class="the-popup">
      <div class="the-popup__header">
        <span>{{ popupTitle.name }}</span>
        <span class="material-icons" @click="closeCart"> close </span>
      </div>
      <div class="the-popup__content">
        <TheCartItem
          v-for="item in CART"
          :key="item.article"
          :cart_item_data="item"
          :cartTotalCost="this.cartTotalCost"
        />
      </div>
      <div class="the-popup__footer"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup-wrapper {
  background: rgba(64, 64, 64, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.the-popup {
  padding: 16px;
  position: fixed;
  top: 100px;
  max-width: 600px;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 100;
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 400px;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      margin-bottom: 15px;
    }
  }
  .material-icons {
    cursor: pointer;
  }
  .sabmit_btn {
    display: inline-block;
    padding: 10px 45px;
    background-color: #f0d43a;
    color: #ffffff;
    font-size: 1rem;
    border-radius: 5px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: 1px solid #f0d43a;
  }
  .close-modal {
    display: inline-block;
    padding: 10px 45px;
    background-color: #f0d43a;
    color: #ffffff;
    font-size: 1rem;
    border-radius: 5px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: 1px solid #f0d43a;
  }
  .sabmit_btn:hover {
    background-color: #f8b22f;
    border: 1px solid #f8b22f;
    color: #ffffff;
  }
  .close-modal:hover {
    background-color: #f8b22f;
    border: 1px solid #f8b22f;
    color: #ffffff;
  }
}
</style>
