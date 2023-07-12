import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: ''
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ''
        }
    ]
});

export default router;