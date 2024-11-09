import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/lab1bai3.vue';
import HomePage from '../components/lab1bai4.vue';
import BlogPage from '../components/lab1bai2.vue';
import Lab1Bai1Component from '../components/lab1bai1.vue';
import Lab2Bai4Component from '../components/lab2bai4.vue'; 
import Lab2Bai1 from '../components/lab2bai1.vue';
import Lab2Bai2 from '../components/lab2bai2.vue';
import Lab2Bai3 from '../components/lab2bai3.vue';
import Lab3Bai1 from '../components/lab3bai1.vue';
import Lab3Bai2 from '../components/lab3bai2.vue';
import Lab3Bai3 from '../components/lab3bai3.vue';
import Lab3Bai4 from '../components/lab3bai4.vue';

const routes = [
    { path: '/bai4', component: HomePage },
    { path: '/bai2', component: BlogPage },
    { path: '/bai3', component: About },
    { path: '/bai1', component: Lab1Bai1Component },
    { path: '/lab2bai4', component: Lab2Bai4Component },
    { path: '/lab2bai1', component: Lab2Bai1},
    { path: '/lab2bai2', component: Lab2Bai2},
    { path: '/lab2bai3', component: Lab2Bai3},
    { path: '/lab3bai1', component: Lab3Bai1},
    { path: '/lab3bai2', component: Lab3Bai2},
    { path: '/lab3bai3', component: Lab3Bai3},
    { path: '/lab3bai4', component: Lab3Bai4},
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
