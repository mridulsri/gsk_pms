import Vue from "vue";
import Toasted from "vue-toasted";
// Vue.use(Toasted)

/* common options */
const custom_options = {
  theme: "outline",
  position: "top-right",
  duration: 5000,
};

// vue-prototype to acess axios instance globally by <this.$toasted>.
Vue.use(Toasted, custom_options);
