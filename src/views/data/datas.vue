<template>
    <el-container class="home-container">
        <LeftNaviage :idx="idx"></LeftNaviage>
        <div class="right-content">
            <middle-header></middle-header>
            <div class="main-content">
                <el-card class="box-card sys-warp" height="500px">
                    <div slot="header" class="clearfix">
                        <span>数据统计</span>
                        <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
                    </div>
                    <!--<div><span>基本表格</span></div>-->
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="date" label="日期" width="180"></el-table-column>
                        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                        <el-table-column prop="address" label="地址"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </div>
        </div>
    </el-container>
</template>
<script>

    import LeftNaviage from '@/components/navigate/navigate.vue'

    import middleHeader from '@/components/header/middleHeader'

    export default {
        name: 'datas',
        components: {
            LeftNaviage,
            middleHeader
        },
        data() {
            return {
                idx: 4,
                tableData: [{
                    id:1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    id:2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    id:3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    id:4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods:{
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(row.id);
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