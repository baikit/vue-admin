<template>
    <el-container class="home-container">
        <LeftNaviage :idx="idx"></LeftNaviage>
        <div class="right-content">
            <middle-header></middle-header>
            <div class="main-content">

                <el-card class="sys-warp" height="500px">
                    state
                </el-card>
            </div>
        </div>
    </el-container>
</template>
<script>

    import LeftNaviage from '@/components/navigate/navigate.vue'

    import middleHeader from '@/components/header/middleHeader'

    export default {
        name: 'state',
        components: {
            LeftNaviage,
            middleHeader
        },
        data() {
            return {
                idx: 2
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