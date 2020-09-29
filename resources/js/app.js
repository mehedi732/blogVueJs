require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
//v  router start==================================
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import { routes } from "./routes";
//v router end==================================

//v form start==================================
import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
//v form end=====================================
//sweet alert2
Vue.component('main-component', require('./components/Master.vue').default);

const router = new VueRouter({
    routes,
    mode: 'history'
})

//v  capitalize filtering start==================================
Vue.filter('upText', function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
})

Vue.filter('myDate', function(created) {
        return moment(created).format('MMMM Do YYYY');
    })
    //progress bar
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '4px'
})

const app = new Vue({
    el: '#app',
    router
});
