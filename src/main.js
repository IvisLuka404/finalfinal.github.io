import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import Personajes from "./components/Personajes.vue";

//definir rutas
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/personaje/:id",
    name: "personaje",
    component: Personajes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

createApp(App).use(router).mount("#app");
