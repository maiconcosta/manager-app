import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pedidos from "../views/Pedidos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pedidos",
    name: "Pedidos",
    component: Pedidos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
