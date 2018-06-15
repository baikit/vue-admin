<template>
    <div class="right-content">
        <minddle-header></minddle-header>
        <div class="main-content">
            <el-card class="user-info">
                <div class="pd-bottom-10">个人资料</div>
                <div class="user-img">
                    <!--<img :src="" alt="">-->
                </div>
                <div class="user-item">
                    <p class="mgb-10">admin <i class="el-icon-edit"></i></p>
                    <p class="mgb-10">广州市天河区 <i class="el-icon-edit"></i></p>
                    <h4 class="mgb-10">关于我</h4>
                    <p class="mgb-10">{{ form.desc }}</p>
                    <p>{{ form.mobile }}</p>
                </div>
            </el-card>

            <el-card class="user-wrap">
                <div>修改</div>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="网站地址">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="阅览级别">
                        <el-select v-model="form.level" placeholder="请选择开放级别">
                            <el-option label="对所有人开放" value="nologin"></el-option>
                            <el-option label="仅登陆后可读" value="login"></el-option>
                            <el-option label="仅管理员可读" value="sysuser"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="联系方式">
                        <el-input v-model="form.mobile"></el-input>
                    </el-form-item>
                    <el-form-item label="消息推送">
                        <el-switch v-model="form.ispushed"></el-switch>
                    </el-form-item>
                    <el-form-item label="发布设置">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox v-for="setting in releaseset" :label="setting" :key="setting">{{setting}}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="公开">
                        <el-radio-group v-model="form.opened">
                            <el-radio label="1">是</el-radio>
                            <el-radio label="0">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="关于我">
                        <el-input type="textarea" v-model="form.desc" :rows="10"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">保存修改</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>
<script>

    import MinddleHeader from "../../components/header/middleHeader";

    const releaseSetList = ['热搜','置顶','只读','可评论','可回复'];
    export default {
        name: 'homecontent',
        components: {MinddleHeader},
        data() {
            return {
                form: {
                    name: 'www.baikit.com',
                    level: 'login',
                    mobile: '135****2715',
                    ispushed: false,
                    type: [],
                    opened: '',
                    desc: '此人很懒，什么都没有留下',
                },
                releaseset:releaseSetList
            }
        },
        methods: {
            onSubmit() {
                console.log(this.form);
            },
            exchangeUser() {
                sessionStorage.setItem('isLogin', 'false');
                this.$router.push('/login');
            },
            logout() {
                sessionStorage.setItem('isLogin', 'false');
                this.$router.push('/login');
            }
        },
        created() {

        }
    }
</script>
