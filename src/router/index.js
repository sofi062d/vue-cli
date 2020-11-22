import Vue from "vue";
import VueRouter from "vue-router";
import Create from "../views/Create.vue";

Vue.use(VueRouter);

const routes = [
  {
    //Start page
    path: "/",
    name: "Create",
    component: Create
  },
  {
    path: "/items",
    name: "Items",
    component: () =>
      import("../views/Items.vue")
  },
  {
    path: "/update",
    name: "Update",
    component: () =>
      import("../views/Update.vue"),
      props: true
      
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
