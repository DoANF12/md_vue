import {createRouter, createWebHistory} from "vue-router"
const App = () => import("../App.vue")

const routes = [
    {
        path: '/',
        name: 'App',
        component: App
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

