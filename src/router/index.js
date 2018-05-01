import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    mode: 'hash', //hash
    routes: [
        {
            path: '/',
            name: 'Index',
            component: resolve => require(['../pages/home/home'], resolve),
            meta: {requiresAuth: true}
        },
        {
            path: '/login',
            name: 'Login',
            component: resolve => require(['../pages/login/login'], resolve),
            meta: {requiresAuth: false}
        },
        {
            path: '/photos',
            name: 'Photos',
            component: resolve => require(['@/pages/photos/photos'], resolve),
            meta: {requiresAuth: true}
        },
        {
            path: '/state',
            name: 'State',
            component: resolve => require(['../pages/state/state'], resolve),
            meta: {requiresAuth: true}
        },
        {
            path: '/blog',
            name: 'Blog',
            component: resolve => require(['../pages/blog/blog'], resolve),
            meta: {requiresAuth: true}
        },
        {
            path: '/data',
            name: 'Dadas',
            component: resolve => require(['../pages/data/datas'], resolve),
            meta: {requiresAuth: true}
        },
        {
            path: '/sysinfo',
            name: 'SysInfo',
            component: resolve => require(['../pages/sysinfo/sysinfo'], resolve),
            meta: {requiresAuth: true}
        },
        {
            path: '/site',
            name: 'Site',
            component: resolve => require(['../pages/site/site'], resolve),
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
