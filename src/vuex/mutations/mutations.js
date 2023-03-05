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
  }
};
