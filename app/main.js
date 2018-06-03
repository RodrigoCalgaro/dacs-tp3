import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import ListPersona from './components/ListPersona.vue';
import CreatePersona from './components/CreatePersona.vue';
import EditPersona from './components/EditPersona.vue';
import ShowPersona from './components/ShowPersona.vue';


const routes = [
    {
        name: 'ListPersona',
        path: '/',
        component: ListPersona
    },
    {
        name: 'CreatePersona',
        path: '/add',
        component: CreatePersona
    },
    {
        name: 'EditPersona',
        path: '/edit/:id',
        component: EditPersona
    },
    {
        name: 'ShowPersona',
        path: '/show/:id',
        component: ShowPersona
    }
];

const router = new VueRouter({mode: 'history', routes: routes});

new Vue(Vue.util.extend({router}, App)).$mount('#app');