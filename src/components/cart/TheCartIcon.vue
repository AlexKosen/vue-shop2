<script>

  export default {
    props: {
      itemCount: {
        type: Number,
        default: 0
      }
    },
    methods: {
      showCart() {
        this.$emit('showCart')
      }
  }
}
  </script>

<template>
    <div class="cart-icon" @click="showCart">
      <span v-if="itemCount > 0" class="cart-count">{{ itemCount }}</span>
      <i class="fa fa-cart-plus" aria-hidden="true"></i>
    </div>
  </template>
  
  <style lang="scss">
  .cart-icon {
    position: relative;
    margin-left: 15px;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 992px) {
      margin-left: 0;
    }
  }
  
  .cart-count {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 18px;
    height: 18px;
    background-color: #3b4a6b;;
    color: white;
    font-size: 12px;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
  }
  
  .fa-shopping-cart {
    font-size: 24px;
    color: black;
  }

  </style>
  