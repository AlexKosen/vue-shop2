<script>
export default {
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        },

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
            <p><span>{{ cart_item_data.name }}</span></p>
            <p><span>Model:</span> {{ cart_item_data.article }}</p>
            <p><span>Price:</span> {{ cart_item_data.price }}$</p>     
        </div>
        <div class="the-cart-item__quantity">
            <p>Qty: </p>
            <span class="quantity">
                <span class="quantity__btn" @click="incrementItem">+</span>
                {{ cart_item_data.quantity }}
                <span class="quantity__btn" @click="decrementItem">-</span>
            </span>
            
        </div>
        <button class="the-cart-item__btn-delete" @click="deleteFromCart">Delete</button>
    </div>
  
</template>

<style lang="scss">
.the-cart-item {
    display: flex;
    flex-wrap: nowrap;
    min-width: 85%;
    border-radius: 15px;
    justify-content: space-between; 
    align-items: center;
    box-shadow: 0 0 8px 0;
    padding: 10px;
    margin: 10px 5px;
    overflow: hidden;
    @media (max-width: 360px) {
        flex-direction: column;
    }
    &__image {
        max-width: 60px;
        @media (max-width: 480px) {
            margin: 0 15px 0 4px;
        }
        @media (max-width: 360px) {
            text-align: center;
            margin: 15px 0;
        }
    }
    &__info {
        @media (max-width: 360px) {
            text-align: center;
        }
    }
    &__info p span {
        font-weight: 600;
    }
    &__quantity {
        text-align: center;
        & p {
            margin: 2px;
        }
    }
    .quantity {
        display: flex;
        flex-wrap: nowrap; 
    }
   .quantity__btn {
    cursor: pointer;
    margin: 0 7px;
   }
   .the-cart-item__btn-delete {
    display: inline-block;
    padding: 4px 15px;
    background-color: #b8b6ac;
    color: #ffffff;
    font-size: 0.8rem;
    border-radius: 5px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: none;
    margin: 0 10px;
    @media (max-width: 360px) {
        padding: 1px 10px;
        margin: 15px 0;
        }
    &:hover {
        background-color: #ddd6c7;
        border: none;
        color: #6d6d6d;
    }
  }    
}

</style>