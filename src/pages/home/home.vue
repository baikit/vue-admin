<template>
    <el-container class="home-container">
        <LeftNaviage :idx="idx"></LeftNaviage>
        <HomeContent></HomeContent>
    </el-container>
</template>
<script>
    import LeftNaviage from '@/components/navigate/navigate.vue'
    import HomeContent from './content.vue';

    export default {
        name: 'HomeIndex',
        components: {
            LeftNaviage,
            HomeContent
        },
        data() {
            return {
                idx: 0
            }
        },
        methods: {
            checkLogin() {
                let isLogin = localStorage.getItem('isLogin');

                if (isLogin !== 'true') {
                    this.$router.push('/login');
                }
            }
        },
        created() {
            this.checkLogin();
        }
    }
</script>