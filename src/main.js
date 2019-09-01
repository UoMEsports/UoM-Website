import Vue from 'vue';
import App from './App.vue';
import Discord from './DiscordPopup.vue';
import router from './router';
import VueCookies from 'vue-cookies';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faEnvelopeOpenText, faBeer, faComments, faUserFriends, faQuestionCircle, faTrophy } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faEnvelopeOpenText, faBeer, faComments, faUserFriends, faQuestionCircle, faTrophy);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueCookies);

VueCookies.config('30d');

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

new Vue({
  render: h => h(Discord)
}).$mount('#discord');
