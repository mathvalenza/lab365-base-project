import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExercisesView from "../views/ExercisesView.vue";
import ExampleView from "../views/ExampleView.vue";
import ExampleApi from "../views/ExampleApi.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/exercises",
    name: "exercies",
    component: ExercisesView,
  },
  {
    path: "/examples",
    name: "examples",
    component: ExampleView,
  },
  {
    path: "/example-api",
    name: "Exemplo com API",
    component: ExampleApi,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
