/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:25 
 * @Last Modified by:   Hovees-hwx
 * @Last Modified time: 2019-10-02 21:05:25
 */


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {post,fetch,patch,put} from '@/service/http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$ui = ElementUI;

var _this = new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


export default {
  _this
}



