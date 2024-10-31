<template>
    <div class="register-container">
        <h1>Register Page</h1>
        <form @submit.prevent="register" class="register-form">
            <input type="email" placeholder="Email" v-model="email" required />
            <input type="password" placeholder="Password" v-model="password" required />
            <button type="submit">Register</button>
        </form>
        <p>
            Already have an account? 
            <router-link to="/login">Login here</router-link>
        </p>
        <button v-if="user" @click="sendVerificationEmail">Resend Verification Email</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, User } from "firebase/auth";

const email = ref('');
const password = ref('');
const user = ref<User | null>(null); // Определяем переменную user
const router = useRouter();
const auth = getAuth();

// Проверка состояния аутентификации
onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser; // Обновляем состояние user
    });
});

const register = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const newUser = userCredential.user;
        await sendEmailVerification(newUser);
        alert("Verification email sent. Please check your inbox.");
        router.push({ name: 'login' });
    } catch (error) {
        console.error("Registration failed:", error);
        alert("Registration failed: " + error);
    }
};

const sendVerificationEmail = async () => {
    if (user.value) { // Проверяем, есть ли текущий пользователь
        await sendEmailVerification(user.value);
        alert("Verification email resent. Please check your inbox.");
    }
};
</script>

<style scoped>
.register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.register-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 300px;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

p {
    margin-top: 10px;
}
</style>
