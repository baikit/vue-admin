<template>
    <div class="login-bg">
        <img :src="require('@/assets/src/login-bg-2.jpg')" alt="">
        <div class="login-win">
            <el-card class="box-card">
                <div slot="header" class="clearfix login-win-header">
                    <span>管理员登录</span>
                </div>
                <el-form :model="form">
                    <el-form-item label="帐号" :label-width="formLabelWidth">
                        <el-input class="login-input" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" :label-width="formLabelWidth">
                        <el-input class="login-input" v-model="form.password" type="password" @keyup.enter.native="loginSure"></el-input>
                    </el-form-item>
                </el-form>
                <div class="login-footer">
                    <el-button @click="resgister">注册</el-button>
                    <el-button type="primary" @click="loginSure" :disabled="isSubmiting">登录</el-button>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HomeLogin',
        data() {
            return {
                form: {
                    name: '',
                    password: '',
                },
                formLabelWidth: '120px',
                isSubmiting: false,
            };
        },
        methods: {
            resgister() {
                this.$message('请联系网站管理员注册管理员帐号');
            },
            loginSure() {

                if (!this.form.name || !this.form.password){
                    this.$message({
                        message: '请输入帐号或密码!',
                        type: 'error'
                    });
                    return
                }

                this.$message({
                    message: '正在登录，请稍后...',
                    duration: 2000
                });

                //this.isSubmiting = true;
                if (this.form.name && this.form.password) {

                    this.$http.post('http://api.baikit.net/user/user/login',{name:this.form.name,password:this.form.password}).then((res) => {
                        if (res.data.code === 200){
                            this.$message({
                                message: '登录成功!',
                                type: 'success'
                            });
                            sessionStorage.setItem('isLogin', 'true');
                            this.$router.push({path:'/'});
                        }else{
                            this.$message({
                                message: '登录失败,请确认帐号或者密码是否输入正确!',
                                type: 'error'
                            });
                            this.isSubmiting = false;
                        }

                    },(error) => {
                        this.$message({
                            message: '登录失败,请确认帐号或者密码是否输入正确!',
                            type: 'error'
                        });
                        this.isSubmiting = false;
                        console.log(error);
                    })
                }
            }
        },
        created() {

        }
    };

</script>
