import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({ commit }) {
        return axios
          .get("http://localhost:3000/products")
          .then((products) => {
            commit("SET_PRODUCT_TO_STATE", products.data);
            return products;
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      },
    
      GET_PRODUCTS_PRIME_FROM_API({ commit }) {
        return axios
          .get("http://localhost:3000/products_prime")
          .then((products) => {
            commit("SET_PRODUCT_PRIME_TO_STATE", products.data);
            return products;
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      },
    
}

