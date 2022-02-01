import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import store from "../store/index";

import { routes as employeeRoutes } from "../modules/employee";
import { routes as projectRoutes } from "../modules/project";

Vue.use(VueRouter);

const routes = [
  ...employeeRoutes,
  ...projectRoutes,

  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
});
/*
router.beforeResolve((to, from, next) => {
  if (to.name) {
    store.commit("set_loader", true);
  }
  next();
});

router.afterEach((to, from) => {
  setTimeout(() => {
    store.commit("set_loader", false);
  }, 500);
});
*/
export default router;
