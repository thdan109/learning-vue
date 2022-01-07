
import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home"
import DashBoard from "../pages/Dashboard.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dash Board",
    component: DashBoard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router