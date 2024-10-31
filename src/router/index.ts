import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue'; 
import Register from '@/components/Register.vue';
import Todo from '@/components/Todo.vue';
import { getAuth } from "firebase/auth";

const routes = [
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/todo', name: 'todo', component: Todo },
    { path: '/', redirect: { name: 'todo' } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Перевірка авторизації
router.beforeEach((to, from, next) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (to.name !== 'login' && to.name !== 'register' && !user) {
        next({ name: 'login' });
    } else if (user && to.name === 'login') {
        next({ name: 'todo' });
    } else {
        next();
    }
});

export default router;
