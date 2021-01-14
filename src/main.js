import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Antd from 'ant-design-vue'
import router from './router.js'
import 'ant-design-vue/dist/antd.css'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
  axios,
  router,
  render: h => h(App),
}).$mount('#app')
