import Vue from 'vue';
import Router from 'vue-router';

import HiPS_trial from '../pages/HiPS_trial.vue';
import BSC_trial from '../pages/BSC_trial.vue';
import DGT_trial from '../pages/DGT_trial.vue';
import TS_trial from '../pages/TS_trial.vue';
import P3_trial from '../pages/P3_trial.vue';
import panels_pro from '../components/panels_pro.vue';
import homepage from "../pages/homepage";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'homepage',
            component: homepage
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/HiPS/pro',
            name: 'HiPS_pro',
            component: panels_pro
        },
        {
            path: '/BSC/pro',
            name: 'BSC_pro',
            component: panels_pro
        },
        {
            path: '/DGT/pro',
            name: 'DGT_pro',
            component: panels_pro
        },
        {
            path: '/TS/pro',
            name: 'TS_pro',
            component: panels_pro
        },
        {
            path: '/P3/pro',
            name: 'P3_pro',
            component: panels_pro
        },
        {
            path: '/HiPS/trial',
            name: 'HiPS_trial',
            component: HiPS_trial
        },
        {
            path: '/BSC/trial',
            name: 'BSC_trial',
            component: BSC_trial
        },
        {
            path: '/DGT/trial',
            name: 'DGT_trial',
            component: DGT_trial
        },
        {
            path: '/TS/trial',
            name: 'TS_trial',
            component: TS_trial
        },
        {
            path: '/P3/trial',
            name: 'P3_trial',
            component: P3_trial
        },
    ]
});
