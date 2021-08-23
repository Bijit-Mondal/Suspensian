import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
import VueSplash from 'vue-splash'
import VueRouter from 'vue-router'
import VueClipboards from 'vue-clipboards';
import router from './router'
import './registerServiceWorker'
import VueTypedJs from 'vue-typed-js'

Vue.config.productionTip = false
Vue.use(Vuesax)
Vue.use(VueRouter)
Vue.use(VueSplash)
Vue.use(VueClipboards)
Vue.use(VueTypedJs)
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
