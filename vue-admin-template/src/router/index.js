import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Social from '../pages/Social.vue';
import Media from '../pages/Media.vue';
import Snackbar from '../pages/Snackbar.vue';
import Chart from '../pages/Chart.vue';
import HiPS from '../pages/HiPS.vue';
import Mailbox from '../pages/Mailbox.vue';
import Calendar from '../pages/Calendar.vue';
import Login from '../pages/core/Login.vue';
import Error from '../pages/core/Error.vue';
import BSC from '../pages/BSC.vue';
import DGT from '../pages/DGT.vue';
import TS from '../pages/TS.vue';
import P3 from '../pages/P3.vue';


Vue.use(Router);

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        breadcrumb: [
          { name: 'dashboard' }
        ]
      }
    },*/
    {
      path: '/HiPS',
      name: 'HiPS',
      component: HiPS,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'HiPS' }
        ]
      }
    },
    {
      path: '/BSC',
      name: 'BSC',
      component: BSC,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'sBSC' }
        ]
      }
    },
    {
      path: '/DGT',
      name: 'DGT',
      component: DGT,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'DGT' }
        ]
      }
    },
    {
      path: '/TS',
      name: 'TS',
      component: TS,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'TS' }
        ]
      }
    },
    {
      path: '/P3',
      name: 'P3',
      component: Chart,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'P3' }
        ]
      }
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'charts' }
        ]
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        allowAnonymous: true
      }
    },
  ]
});
