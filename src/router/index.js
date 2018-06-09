import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    mode: 'hash', //hash
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('../views/home/home'),
            meta: {requiresAuth: true}
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/login/login'),
            meta: {requiresAuth: false}
        },
        {
            path: '/photos',
            name: 'Photos',
            component: () => import('../views/photos/photos'),
            meta: {requiresAuth: true}
        },
        {
            path: '/state',
            name: 'State',
            component: () => import('../views/state/state'),
            meta: {requiresAuth: true}
        },
        {
            path: '/blog',
            name: 'Blog',
            component: () => import('../views/blog/blog'),
            meta: {requiresAuth: true}
        },
        {
            path: '/data',
            name: 'Dadas',
            component: () => import('../views/data/datas'),
            meta: {requiresAuth: true}
        },
        {
            path: '/sysinfo',
            name: 'SysInfo',
            component: () => import('../views/sysinfo/sysinfo'),
            meta: {requiresAuth: true}
        },
        {
            path: '/site',
            name: 'Site',
            component: () => import('../views/site/site'),
            meta: {requiresAuth: true}
        },
    ]
});

// 全局钩子 路由守卫 检查路由是否需要登录
router.beforeEach((to, from, next) => {

    if (to.path === '/login' && to.name === 'Login') {
        next();
    } else {
        if (to.meta.requiresAuth && sessionStorage.getItem('isLogin') !== 'true') {
            next('/login');
        } else {
            next();
        }

    }

});

export default router
