import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies';

Vue.config.productionTip = false;

Vue.use(VueCookies);

VueCookies.config('30d');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
