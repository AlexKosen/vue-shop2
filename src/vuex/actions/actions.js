import axios from "axios";

export default {
  GET_PRODUCTS_FROM_API({ commit }) {
    return axios
      .get("https://vueshop3-20182-default-rtdb.europe-west1.firebasedatabase.app/products.json")
      .then((products) => {
        commit("SET_PRODUCT_TO_STATE", products.data);
        return products;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },

  ADD_TO_CART({commit}, product) {
    commit("SET_TO_CART", product)
  },

  INCREMENT_TO_CART_ITEM({commit}, index) {
    commit("INCREMENT", index)
  }, 

  DECREMENT_TO_CART_ITEM({commit}, index) {
    commit("DECREMENT", index)
  },

  DELETE_FROM_CART({commit}, index) {
    commit("REMOVE_CART", index)
  },
  CHECKOUT_FROM_CART({commit}, cart) {
//     console.log(cart)
//  axios
//     .post("http://localhost:3000/check_out_cart", cart)
//     .then((cart) => {
      commit("CHECKOUT_CART")
    // })
    
  }
};
