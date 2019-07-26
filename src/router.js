import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@/views/Home.vue");
const Login = () => import("@/views/Login");
const Dashboard = () => import("@/views/Dashboard");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    }
  ]
});
