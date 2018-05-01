<template>
    <el-header class="right-content-header">
        <div class="left-wrap">
            <!--<el-input placeholder="请输入内容" prefix-icon="el-icon-search" class="left-content-search"></el-input>-->
        </div>
        <div class="right-wrap">
            <el-button size="small" icon="el-icon-document">网站首页</el-button>
            <el-button size="small" @click="exchangeUser">切换帐号</el-button>
            <el-button size="small" @click="logout">退出</el-button>
        </div>
    </el-header>
</template>
<script>

    export default{

        name : 'minddleHeader',

        data(){
            return {

            }
        },

        methods: {
            exchangeUser(){
                sessionStorage.setItem('isLogin',false);
                this.$router.push('/login');
            },
            logout(){
                sessionStorage.setItem('isLogin',false);
                this.$router.push('/login');
            }
        }

    }
</script>