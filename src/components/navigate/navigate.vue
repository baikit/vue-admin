<template>
    <el-aside width="220px" class="nav-slider">
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
        <div class="nav-content">
            <ul class="nav-list">
                <li v-for="(list,index) in navlists" :class="{'active':idx === index }">
                    <router-link :to="list.to">
                        <span>{{ list.name }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </el-aside>
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
                navList: ['个人中心', '随行摄影', '随心絮语', '随笔动弹', '数据统计', '系统信息', '网站管理'],
                navlists: [
                    {name: '个人中心', to: '/'},
                    {name: '随行摄影', to: '/photos'},
                    {name: '随心絮语', to: '/state'},
                    {name: '随笔动弹', to: '/blog'},
                    {name: '数据统计', to: '/data'},
                    {name: '系统信息', to: '/sysinfo'},
                    {name: '网站管理', to: '/site'},
                ],
                loginInfo: {
                    user: 'admin',
                    level: '超级管理员',
                    img: 'static/logo.png'
                }
            }
        },
        methods: {
            changeActive(index) {
                this.idx = index;
            }
        },
        created() {
        }
    }
</script>