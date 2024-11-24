import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Complaints from './pages/Complaints.vue'
import Results from './pages/Results.vue'

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/complaints',
        component: Complaints,
    },{
        path: '/complaints/:results',
        component: Results,
    }]
}))
.mount('#app')
