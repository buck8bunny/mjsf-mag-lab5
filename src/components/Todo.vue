<template>
    <div class="todo-container">
        <h1>Todo Page</h1>
        <p v-if="loading">Loading user information...</p>
        <p v-else-if="user && user.emailVerified">Welcome, {{ user.email }}!</p>
        <p v-else-if="user && !user.emailVerified">
            Please verify your email address. 
            <button @click="sendVerificationEmail">Send Verification Email</button>
        </p>
        <button v-if="user && user.emailVerified" @click="logout">Logout</button>
        <p v-else>No access. Please log in.</p>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getAuth, signOut, onAuthStateChanged, sendEmailVerification, User as FirebaseUser } from "firebase/auth";

const auth = getAuth();
const user = ref<FirebaseUser | null>(null);
const loading = ref(true); // Флаг для завантаження

// Перевірка стану аутентифікації
onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser;
        loading.value = false; // Завершення завантаження

        if (!currentUser) {
            // Якщо користувача немає, перенаправляємо на сторінку входу
            window.location.href = '/login';
        }
    });
});

// Логіка виходу з аккаунта
const logout = async () => {
    try {
        await signOut(auth);
        user.value = null;
    } catch (error) {
        console.error("Error during logout:", error);
    }
};

// Логіка повторної відправки повідомлення для верифікації електронної пошти
const sendVerificationEmail = async () => {
    const currentUser = auth.currentUser; // Отримуємо поточного користувача

    if (currentUser) {
        try {
            await sendEmailVerification(currentUser); // Викликаємо метод на поточному користувачі
            alert('Verification email sent. Please check your inbox.');
        } catch (error) {
            console.error("Error sending verification email:", error);
        }
    } else {
        console.warn("No user is currently signed in.");
    }
};
</script>

<style scoped>
.todo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

button {
    padding: 10px 15px;
    background-color: #FF5733;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background-color: #C70039;
}
</style>
