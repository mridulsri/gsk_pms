import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

function initialState() {
  return {
    employees: [],
  };
}

export default {
  namespaced: true,
  state: initialState,
  actions,
  getters,
  mutations,
};
