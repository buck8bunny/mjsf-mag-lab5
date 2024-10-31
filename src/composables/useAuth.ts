import { reactive, onMounted } from "vue";
import { getAuth, onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import type { UserState } from "@/types/userState";
import type { User } from "@/types/user";

const userState: UserState = reactive<UserState>({
    authorized: false,
    user: undefined,
    error: undefined,
});

// Функция для инициализации отслеживания состояния пользователя
const initAuthState = () => {
    const auth = getAuth();
    
    onAuthStateChanged(auth, (currentUser: FirebaseUser | null) => {
        if (currentUser) {
            userState.authorized = true;
            userState.user = {
                id: currentUser.uid, // Используем uid как id
                email: currentUser.email || '', // Убедитесь, что email существует
            };
            userState.error = undefined;
        } else {
            userState.authorized = false;
            userState.user = undefined; // Если пользователь не авторизован, обнуляем данные
        }
    });
};

// Используйте onMounted для инициализации отслеживания состояния
onMounted(() => {
    initAuthState();
});

export default function () {
    return {
        userState,
    }
}
