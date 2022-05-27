import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(
            /* webpackChunkName: "PageDashboard" */ '../views/DashboardView'
            )
    },
    {
        path: '/about*',
        name: 'About',
        component: () => import(
            /* webpackChunkName: "PageAbout" */ '../views/AboutView'
            )
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () => import(
           /* webpackChunkName: "Page404" */ '../views/Page404'
            )
    },
    {
        path: '/auth',
        name: 'Login',
        component: () => import('../components/AuthForm')
    },
    {
        path: '/add/:section/:category/',
        name: 'AddPaymentForm',
        component: () => import('../components/AddPaymentForm')
    },
    {
        path: '*',
        redirect: {name: 'NotFound'}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

const userAuthExists = true;

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !userAuthExists) {
        next({name: 'Login'})
        alert('Необходимо авторизоваться!')
    } else {
        next()
    }
})

const getTitleRouteName = routeName => {
    return {
        'Dashboard': 'Взгляните на свои платежи и добавьте больше!',
        'About': 'Что-нибудь о нашем удивительном приложении!',
        'NotFound': 'Ой! Кажется, мы потеряли эту страницу :('
    }[routeName]
}

router.afterEach((to) => {
    document.title = getTitleRouteName(to.name)
})

export default router