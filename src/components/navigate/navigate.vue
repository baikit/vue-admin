<template>
    <div class="nav-slider">
        <div class="nav-header">
            <img :src="require('@/assets/src/nav-header.png')" alt="" class="nav-header-img">
            <div class="nav-header-logo">
                <img v-bind:src="loginInfo.img" alt="" class="sys-img">
                <div class="sys-info">
                    <span class="sys-name">{{ loginInfo.user }}</span>
                    <span class="sys-level">{{ loginInfo.level }}</span>
                </div>
            </div>
        </div>
        <div class="nav-slider-list">
            <el-menu
                    default-active="2"
                    background-color="#2f4050"
                    @select="handleSelect"
                    text-color="#fff"
                    :router="true"
                    :default-active='$route.fullPath'
                    :unique-opened="true"
                    style="height: 100%;width: 100%">
                <el-submenu v-for="list in navlists" :index="list.index" v-if="list.children">
                    <template slot="title" >
                        <i class="el-icon-location"></i>
                        <span>{{list.menuName}}</span>
                    </template>
                    <el-submenu v-for="seconditem in list.children" :index="seconditem.index" v-if="seconditem.grandchildren">
                        <template slot="title">{{seconditem.menuName}}</template>
                        <el-menu-item v-for="therritem in seconditem.grandchildren" :index="therritem.path">{{therritem.menuName}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item :index="seconditem.path" v-else-if="seconditem.path">{{seconditem.menuName}}</el-menu-item>
                </el-submenu>
                <el-menu-item :index="list.path" v-else-if="list.path">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{list.menuName}}</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'naviage',
        props: {
            idx: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                navlists: [
                    {
                        path: '/',
                        name: 'Home',
                        menuName: '管理中心',
                        index:'1'
                    },
                    {
                        path: '/activity',
                        name: 'Activity',
                        menuName: '活动管理',
                        index:'2',
                    },
                    {
                        path: '/corn',
                        name: 'corn',
                        menuName: '币种管理',
                        index:'3',
                    },
                    {
                        name: 'shop',
                        menuName: '商店管理',
                        index:'4',
                        children:[
                            {
                                // path:'/shop/list',
                                name:'shop-list',
                                menuName:'仓鼠',
                                index:'4-1',
                                grandchildren:[
                                    {
                                        menuName: '币种管理',
                                        index:'4-1-1',
                                        path:'/'
                                    }
                                ]
                            },
                            {
                                path:'/shop/list',
                                name:'shop-list',
                                menuName:'市场',
                                index:'4-2',
                            }
                        ]
                    },
                    {
                        path: '/data',
                        name: 'data',
                        menuName: '数据统计',
                        index:'5'

                    },
                    {
                        path: '/users',
                        name: 'users',
                        menuName: '用户数据',
                        index:'6',
                        children:[
                            {
                                path:'/shop/list',
                                name:'shop-list',
                                menuName:'资产认证',
                                index:'6-1',
                            },
                            {
                                path:'/shop/list',
                                name:'shop-list',
                                menuName:'流水记录',
                                index:'6-2',
                            }
                        ]
                    },
                    {
                        path: '/sysinfo',
                        name: 'sysinfo',
                        menuName: '系统管理',
                        index:'7'

                    },
                    {
                        path: '/site',
                        name: 'site',
                        menuName: '站点管理',
                        index:'8'
                    },
                    {
                        path: '/user/auth',
                        name: 'audits',
                        menuName: '资产认证审核',
                        index:'9'
                    },
                    {
                        path: '/system/notice',
                        name: 'notice',
                        menuName: '系统公告',
                        index:'10'

                    },
                    {
                        path: '/system/verify',
                        name: 'verifyLog',
                        menuName: '验证码列表',
                        index:'11'
                    },


                ],
                loginInfo: {
                    user: 'admin',
                    level: '超级管理员',
                    img: 'static/logo.png'
                },
                currentUrl:''
            }
        },
        methods: {

        },
        created() {

        }
    }
</script>
<style>
    ::-webkit-scrollbar
    {
        width: 0;
        height: 0;
        background-color: #F5F5F5;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 0;
        background-color: #F5F5F5;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
        border-radius: 0;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #555;
    }

    .active{
        border-left: 4px solid #19aa8d;
        background: #293846;
    }
</style>