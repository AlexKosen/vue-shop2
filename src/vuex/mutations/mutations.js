export default {
  SET_PRODUCT_TO_STATE: (state, products) => {
    state.products = products;
  },

  SET_PRODUCT_PRIME_TO_STATE: (state, products) => {
    state.products_prime = products;
  },

  SET_TO_CART: (state, product) => {
    if(state.cart.length) {
      let isProductExist = false
      state.cart.map((item) => {
        if(item.article === product.article) {
          isProductExist = true
          item.quantity++
        }
      })
      if(!isProductExist) {
        state.cart.push(product)
      }
    } else {
      state.cart.push(product)
    }
  },

  INCREMENT: (state, index) => {
    state.cart[index].quantity ++
  },

  DECREMENT: (state, index) => {
    if(state.cart[index].quantity > 1) {
      state.cart[index].quantity --
    }
  },

  REMOVE_CART: (state, index) => {
    state.cart.splice(index, 1)
  }
};
