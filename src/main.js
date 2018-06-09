// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import exts from './utils/storage'
Vue.use(exts);

import axios from 'axios';
Vue.prototype.$axios = axios;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.scss'

Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
let a = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
console.log(a);