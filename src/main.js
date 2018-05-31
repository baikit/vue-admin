// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.scss'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueResource);

//设置拦截器
Vue.http.interceptors.push((request, next)  =>{
  //登录成功后将后台返回的TOKEN在本地存下来,每次请求从sessionStorage中拿到存储的TOKEN值
  let Authorization=sessionStorage.getItem('Authorization');

  if(Authorization){
    //如果请求时TOKEN存在,就为每次请求的headers中设置好TOKEN,后台根据headers中的TOKEN判断是否放行
    request.headers.set('Authorization',Authorization);
  }
  next((response) => {
    return response;
  });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
