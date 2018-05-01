<template>
    <el-container class="home-container">
        <LeftNaviage :idx="idx"></LeftNaviage>
        <div class="right-content">
            <middle-header></middle-header>
            <div class="main-content">

                <el-card class="sys-warp" height="500px">
                    <div slot="header" class="clearfix">
                        <span class="sys-item">系统信息</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>

                    <div class="system-info">
                        <div class="text item" style="padding: 18px;">服务器信息</div>
                        <div class="text item">后台版本：1.0.0</div>
                        <div class="text item">系统版本：Linux 7.0.2</div>
                        <div class="text item">运行环境 : Nginx/1.13.0</div>
                        <div class="text item">PHP版本 : PHP 7.0.16</div>
                        <div class="text item">数据库版本 : Mysql 5.7</div>
                        <div class="text item">服务器Ip : 192.168.0.12</div>
                        <div class="text item">上传限制 : 10M</div>
                    </div>

                    <div class="vister-info">
                        <div class="text item" style="padding: 18px;">访问者信息</div>
                        <div class="text item">访问者浏览器 : Chrome</div>
                        <div class="text item">访问者Ip : 192.168.0.2</div>
                        <div class="text item">访问者时间 : 2018-4-20 4:02:12</div>
                    </div>

                </el-card>
            </div>
        </div>
    </el-container>
</template>
<script>
    import LeftNaviage from '@/components/navigate/navigate.vue'

    import middleHeader from '@/components/header/middleHeader'

    export default {
        name: 'sysinfo',
        components: {
            LeftNaviage,
            middleHeader
        },
        data() {
            return {
                idx: 5
            }
        }
    }
</script>
<style>

    .sys-warp {
        height: 100%;
    }

    .sys-item {
        padding: 18px;
        font-size: 20px;
    }

    .item {
        padding: 16px 0 16px 50px;
    }
</style>