import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello';
import DynComp from '../components/DynComp';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello,
        },
        {
            path: '/dyncomp',
            name: 'DynComp',
            component: DynComp,
        },
    ],
});
