import Vue from "vue";
import Vuex from "vuex";
import projectStore from "./project";
import employeeStore from "./employee";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loader: false,
  },
  mutations: {
    set_loader(state, payload) {
      state.loader = payload;
    },
  },
  actions: {},
  modules: {
    employeeStore,
    projectStore,
  },
});
