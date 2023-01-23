import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ProjectList from "./pages/ProjectList.vue";
import NotFound from "./pages/NotFound.vue";
import ProjectSingle from "./pages/ProjectSingle.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage
        },
        {
            path: "/blog",
            name: "blog",
            component: ProjectList
        },
        {
            path: "/blog/:slug",
            name: "Single-Post",
            component: ProjectSingle
        }

        , {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }


    ]
})
export { router };