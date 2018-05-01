<template>
    <section class="checkerboard-wrap">
        <canvas id="checkerboard" width="900" height="1000" style="width: 70%;"></canvas>
    </section>
</template>
<script>

    import Checkerboard from './checkerboard';

    export default{
        name : 'Checkerboard',
        data(){
            return {
                drawing:''
            }
        },
        methods:{

        },
        mounted(){

            this.drawing = new Checkerboard('checkerboard');

        }
    }
</script>
<style lang="scss">
    .checkerboard-wrap{
        width: 100%;
        height: 100%;
        padding: 0 0 0 220px;
        min-width: 1200px;
        text-align: center;
    }
</style>