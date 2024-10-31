<template>
    <div class="login-container">
        <h1>Login Page</h1>
        <form @submit.prevent="login" class="login-form">
            <input type="email" placeholder="Email" v-model="email" required />
            <input type="password" placeholder="Password" v-model="password" required />
            <button type="submit">Login</button>
        </form>
        <p>
            Don't have an account? 
            <router-link to="/register">Register here</router-link>
        </p>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const email = ref('');
const password = ref('');
const router = useRouter();
const auth = getAuth();

const login = async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        alert("Login successful!");
        // Перенаправляем на страницу Todo после успешного входа
        router.push('/todo');
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed: " + error);
    }
};
</script>

<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.login-form {
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
