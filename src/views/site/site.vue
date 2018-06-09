<template>
    <el-container class="home-container">
        <LeftNaviage :idx="idx"></LeftNaviage>
        <Checkerboard></Checkerboard>
    </el-container>
</template>
<script>
    import LeftNaviage from '@/components/navigate/navigate.vue'
    import Checkerboard from './src/checkerboard.vue'
    export default{
        name:'sysinfo',
        components:{
            LeftNaviage,
            Checkerboard
        },
        data(){
            return{
                idx:6
            }
        }
    }
</script>