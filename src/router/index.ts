import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"

const routes: RouteRecordRaw[] = [
    {name: "Root", path: "/", redirect: "/dashboard"},
    {name: "Dashboard", path: "/dashboard", component: () => import("../views/Dashboard.vue")},
]


const router = createRouter({
    routes: routes,
    history: createWebHistory(),
})

export default router