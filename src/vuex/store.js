import { createStore } from "vuex";
import actions from "./actions/actions";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

export const store = createStore({
  state() {
    return {
      products: [],
      cart: [],
    };
  },
  mutations,
  actions,
  getters,
});