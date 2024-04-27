import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from "vue3-apexcharts";

import "../tailwind.css"
import "@/assets/css/style.css"
import "@/assets/css/remixicon.css"

createApp(App).use(router).use(VueApexCharts).mount('#app')