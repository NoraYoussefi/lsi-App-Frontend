import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import login from "../components/login.vue";
import register from "../components/register.vue";
import test from "../components/test.vue";
import chooseUser from "../components/chooseUser.vue";
import appHeader from "../components/appHeader.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
   {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/chooseUser",
    name: "chooseUser",
    component: chooseUser,
  },
  {
    path: "/appHeader",
    name: "appHeader",
    component: appHeader,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
