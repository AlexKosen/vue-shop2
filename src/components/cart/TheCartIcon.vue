<script>

  export default {
    components: {

    },

    props: {
      itemCount: {
        type: Number,
        default: 0
      }
    },
    methods: {
  
  }
}
  </script>

<template>
    <div class="cart-icon">
      <span class="cart-count">{{ itemCount }}</span>
      <i class="fa fa-cart-plus" aria-hidden="true"></i>
    </div>
  </template>
  
  <style>
  .cart-icon {
    position: relative;
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
  