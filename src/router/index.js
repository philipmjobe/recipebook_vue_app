import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RecipesIndex from "../views/RecipesIndex.vue";
import RecipesShow from "../views/RecipesShow.vue";
import RecipesNew from "../views/RecipesNew.vue";

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
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  { path: "/recipes", name: "RecipesIndex", component: RecipesIndex },
  { path: "/recipes/:id", name: "RecipesShow", component: RecipesShow },
  { path: "/recipes/new", name: "RecipesNew", component: RecipesNew },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
