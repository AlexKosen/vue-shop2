<script>
export default {
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        },
        cartTotalCost: {
            type: Number,
            default() {
                return 0
            }
        }
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        },
        decrementItem() {
            this.$emit('decrement')
        },
        incrementItem() {
            this.$emit('increment')
        },

    },

    mounted() {

    },
}

</script>

<template>
    <div class="the-cart-item">
        <img class="the-cart-item__image" :src="'images/' + cart_item_data.image" alt="img">
        <div class="the-cart-item__info">
            <p>{{ cart_item_data.name }}</p>
            <p>{{ cart_item_data.price }}</p>
            <p>{{ cart_item_data.article }}</p>
        </div>
        <div class="the-cart-item__quantity">
            <p>Qty: {{ cartTotalCost }}</p>
            <span>
                <span class="quantity__btn" @click="incrementItem">+</span>
                {{ cart_item_data.quantity }}
                <span class="quantity__btn" @click="decrementItem">-</span>
            </span>
            
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
  
</template>

<style lang="scss">
.the-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between; 
    align-items: center;
    box-shadow: 0 0 8px 0;
    padding: 8px;
    margin-bottom: 8px;
    &__image {
        max-width: 50px;
    }
   .quantity__btn {
    cursor: pointer;
   }    
}

</style>