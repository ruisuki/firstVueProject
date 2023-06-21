import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css'
import axios from 'axios';
// import { Lazyload } from 'vant';

console.log(axios);
Vue.config.productionTip = false
Vue.use(Vant)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
