// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router';

import 'font-awesome/css/font-awesome.css';
import './styles/global.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

import { setupComponents } from './config/setup-components';

import VueSocketIO from 'vue-socket.io'
Vue.use(
    new VueSocketIO({
        debug: true,
        connection: 'http://127.0.0.1:5000'
    })
)

setupComponents(Vue);
import vuetify from './plugins/vuetify';

import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
Vue.use(VuetifyDialog, {
    context: {
        vuetify
    }
})

Vue.config.productionTip = false
// 全局事件总线
const bus = new Vue()
Vue.prototype.bus = bus

new Vue({
    router,
    vuetify,
    components: { App },
    template: '<App/>',
    data: {
        themeColor: '#1D2939'
    },
    render: h => h(App)
}).$mount('#app')
