import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import VueHorizontal from "vue-horizontal";

const app = createApp(App)
app.use(ElementPlus)
// app.use(VueHorizontal)
app.use(router)
app.mount('#app')

