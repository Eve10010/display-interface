import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Social from '../pages/Social.vue';
import Media from '../pages/Media.vue';
import Snackbar from '../pages/Snackbar.vue';
import Chart from '../pages/Chart.vue';
import HiPS from '../pages/HiPS.vue';
import HiPS_2 from '../pages/HiPS_2.vue';
import Mailbox from '../pages/Mailbox.vue';
import Calendar from '../pages/Calendar.vue';
import Login from '../pages/core/Login.vue';
import Error from '../pages/core/Error.vue';
import BSC from '../pages/BSC.vue';
import BSC_2 from '../pages/BSC_2.vue';
import DGT from '../pages/DGT.vue';
import DGT_2 from '../pages/DGT_2.vue';
import TS from '../pages/TS.vue';
import TS_2 from '../pages/TS_2.vue';
import P3 from '../pages/P3.vue';
import P3_2 from '../pages/P3_2.vue';

Vue.use(Router);

export default new Router({
  routes: [
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
          { name: 'BSC' }
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
      path: '/HiPS_2',
      name: 'HiPS_2',
      component: HiPS_2,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'HiPS_2' }
        ]
      }
    },
    {
      path: '/BSC_2',
      name: 'BSC_2',
      component: BSC_2,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'BSC_2' }
        ]
      }
    },
    {
      path: '/DGT_2',
      name: 'DGT_2',
      component: DGT_2,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'DGT_2' }
        ]
      }
    },
    {
      path: '/TS_2',
      name: 'TS_2',
      component: TS_2,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'TS_2' }
        ]
      }
    },
    {
      path: '/P3_2',
      name: 'P3_2',
      component: Chart,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'P3_2' }
        ]
      }
    },

  ]
});
