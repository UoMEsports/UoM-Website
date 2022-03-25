import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Events from './views/Events.vue';
import Socials from './views/Socials.vue';
import Committee from './views/Committee.vue';
import Contact from './views/Contact.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/socials',
      name: 'Socials',
      component: Socials
    },
    {
      path: '/committee',
      name: 'Committee',
      component: Committee
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});
