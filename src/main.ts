import '@/assets/main.css'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import auth from '@/firebase';
import useAuth from "@/composables/useAuth";

const app = createApp(App);
app.use(router);

const { userState } = useAuth();

auth.onAuthStateChanged((firebaseUser: any): void => {
    if (firebaseUser) {
        userState.user = firebaseUser;
        userState.authorized = true;
    } else {
        userState.user = undefined;
        userState.authorized = false;
    }
    console.log(userState);
    

});

// Монтируем приложение один раз
app.mount('#app');
