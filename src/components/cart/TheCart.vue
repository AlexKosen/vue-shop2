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
  
  cartTotalCost() {
    let rezult = [];
    if (this.CART.length) {
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
},
  methods: {
    ...mapActions([
    "INCREMENT_TO_CART_ITEM", "DECREMENT_TO_CART_ITEM", "DELETE_FROM_CART",
    "CHECKOUT_FROM_CART"
    ]),
    closeCart() {
      this.$emit("closeCart");
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
    increment(index) {
      this.INCREMENT_TO_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_TO_CART_ITEM(index)
    },
    checkOutCart() {
      this.closeCart();
      this.CHECKOUT_FROM_CART(this.CART)
      alert("Your order has been successfully placed!")
    }
  },

  mounted() {
    document.addEventListener("click", (item) => {
      if (item.target === this.$refs["popup_wrapper"]) {
        this.closeCart();
      }
    });
  },
};
</script>

<template>
  <div class="popup-wrapper" ref="popup_wrapper">
    <div class="the-popup">
      <div class="the-popup__header">
        <h4>{{ popupTitle }}</h4>
        <span class="material-icons" @click="closeCart"> close </span>
      </div>
      <div class="the-popup__content">
        <div v-if="!CART.length">It's still empty, but it's not too late to fix it!</div>
        <TheCartItem
          v-for="(item, index) in CART"
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
          
        />
      </div>
      <div class="the-popup__footer">
        <h4>Total: ${{ cartTotalCost }}</h4>
        <button class="the-popup__footer-btn"
        @click="checkOutCart"
        >Сheckout</button>
      </div>
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
  overflow-y: hidden
}
.the-popup {
  padding: 16px;
  //position: fixed;
  //top: 100px;
  width: 600px;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 100;
  @media (max-width: 768px) {
    max-width: 80%;
  }
  @media (max-width: 480px) {
    max-width: 95%;
    font-size: 0.8rem;
  }
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 360px) {
       flex-direction: column;
       text-align: center;
       padding: 15px 0;
        }
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 400px;
    overflow-y: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      margin-bottom: 15px;
    }
  }
  .material-icons {
    cursor: pointer;
  }
  .the-popup__footer-btn {
    display: inline-block;
    padding: 8px 35px;
    background-color: #f0d43a;
    color: #ffffff;
    font-size: 1rem;
    border-radius: 5px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: 1px solid #f0d43a;
    &:hover {
        background-color: #f8b22f;
        border: 1px solid #f8b22f;
        color: #ffffff;
    }
  } 
}
</style>
