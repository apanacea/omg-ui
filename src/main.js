import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Antd from 'ant-design-vue'
import router from './router.js'
import urls from './apis/urls'
import 'ant-design-vue/dist/antd.css'

Vue.prototype.$axios = axios
Vue.prototype.$urls = urls
Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
  axios,
  urls,
  router,
  render: h => h(App),
}).$mount('#app')
