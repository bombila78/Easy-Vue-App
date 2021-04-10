import Vue from 'vue'
import Router from 'vue-router'

import HomePage from "@/views/HomePage"
import SitesListPage from "@/views/SitesListPage";
import ProfilePage from "@/views/ProfilePage";
import SiteCardPage from "@/views/SiteCardPage";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomePage
        },

        {
            path: '/sites',
            component: SitesListPage
        },
        {
            path: '/sites/:id',
            component: SiteCardPage,
            props: route => ({ backAvailable: !!route.query.ba })
        },
        {
            path: '/profile',
            component: ProfilePage
        }
    ]
})
