import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Error from '@/views/Error.vue';

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    { 
        path: '/:pathMatch(.*)*',
        name: 'Error', 
        component: Error 
    },
];
const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;