# Робота з роутами (https://bitbucket.org/munspel/vue3-router/src)

## Теоретичні відомості
Vue Router - це офіційний маршрутизатор для Vue.js, який дозволяє створювати односторінкові додатки (SPA) та обробляти навігацію між різними сторінками або віюшками (в'ю-компонентами). 

   Для використання Vue Router потрібно спочатку встановити його в свій Vue.js проект. Ви можете зробити це за допомогою npm або yarn:

   ```bash
   npm install vue-router
   # або
   yarn add vue-router
   ```
   Маршрути визначаються за допомогою `VueRouter`. Ви можете визначити маршрути в окремому файлі та імпортувати їх у вашому додатку. Кожен маршрут містить шлях, який вказує URL адресу, та компонент, який відображається при збігу цього маршруту.
   
   ```js
   import { createRouter, createWebHistory } from 'vue-router'
   import HomeView from '../views/HomeView.vue'
   
   const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes: [
       {
         path: '/',
         name: 'home',
         component: HomeView,
         meta:{
           requiresAuth: true
         }
       },
       {
         path: '/about',
         name: 'about',
         component: () => import('../views/AboutView.vue'),
         meta:{
           requiresAuth: true
         }
       },
     ]
   }) 
   ```
   Vue Router надає засоби для навігації між різними маршрутами. Ви можете використовувати `router-link` для навігації за допомогою посилань або програмовану навігацію за допомогою `this.$router`. Наприклад, `this.$router.push('/about')` перенаправить користувача на сторінку `/about`.

   Vue Router дозволяє створювати вкладені маршрути. Це означає, що ви можете мати внутрішні маршрути в компонентах, які вже відображаються на інших маршрутах.

   Можливо передавати параметри в маршрут за допомогою динамічних сегментів шляху (наприклад, `/user/:id`) і отримувати їх в компоненті за допомогою `this.$route.params`.
   
  Є можливість захищати деякі маршрути від доступу, використовуючи хук `beforeEach` і перевіряючи умови перед навігацією. Це корисно для автентифікації та авторизації.

  Також можна завантажити додаткові дані перед відображенням сторінки, використовуючи хуки життєвого циклу, такі як `beforeRouteEnter`, `beforeRouteUpdate` і `beforeRouteLeave`.

  Vue Router дозволяє  динамічно підключати компоненти, які відображаються на маршрутах, з використанням `component` визначення маршруту.

  Vue Router допомагає створити добре організовані та легко управляємі односторінкові додатки з розширеною навігацією. Вивчення документації Vue Router є важливим для розуміння його можливостей та використання його в вашому Vue.js проекті.

## Завдання

### Крок 1. Налаштування vue-router

1. Ознайомлення з офіційною бібліотекою маршрутизації vue-router
2. Додати vue-router до проекту з попередньої роботи.
3. Створити сторінку "todo" для додатку з попередньої роботи
4. Створити сторінку "about", яка буде містити інформацію про автора додатку.

### Крок 2. Налаштування проєкту Firebase Authentication

1. **Створіть проект Firebase**:
   - Зайдіть на [Firebase Console](https://console.firebase.google.com/).
   - Натисніть "Додати проект" або оберіть існуючий проект, якщо він вже створений у вашому обліковому записі Google.
2. **Створіть додаток**:
   - Додаток може бути мобільним, веб-додатком або іншим. Оберіть Виберіть веб-додаток.
3. **Додайте Firebase до проекту**:
   - Завантажте конфігураційні файли
   - Додайтк залажності відповідно до рекомендацій firebase.
4. **Активуйте Firebase Authentication**:
   - У Firebase Console оберіть "Authentication" в меню та виберіть "Sign-in method". 
   - Активуйте методи автентифікації, які вам потрібні (Обераємо Email/Пароль).
5. **Налаштування автентифікації**:
   - Налаштуйте параметри, такі як мінімальна довжина паролю, обов'язковість підтвердження електронної пошти і т. д.

### Крок 3. Стоворення роутів авторизації та реєстрації

1. **Додайте сторінки авторизації (login) та реестрації (register)** 
   - Створіть відповідні компоненти та відповідні шляхи для них.
   - Реалізуйте логіку авторизації та реєстрації з використанням firebase auth.
   - Після успішної авторизації перенаправляйте користувача на сторінку "todo".
   - На сторінці "todo" реалізуйте вихід з системи та відображення поточного користувача.
   -  Виконати клонуванння та запуск проекту: https://bitbucket.org/munspel/ex6-firebase-auth/src/master/

2. Спираючись на приклад сторінки авторизації реалізувати сторінку реестрації нових користувачів.

3. Для нових користувачів реалізувати перевірку веріфікації email.

4. Заборонити доступ не верифікованих користувачів.

5. Реалізувати можливість повтоної відпрвки повідомлення для верифікації email.
   
6. Налаштуйте хук `beforeEach` для перевірки авторизації користувача.
   - Якщо користувач не авторизований, перенаправляйте його на сторінку авторизації.
   - Якщо користувач авторизований, перенаправляйте його на сторінку "todo".
   
7. Для нових користувачів реалізувати перевірку веріфікації email.

8. Заборонити доступ не верифікованих користувачів.

9. Реалізувати можливість повтоної відпрвки повідомлення для верифікації email.

**_NOTE:_**

У якості прикладу можна використати проєкт https://bitbucket.org/munspel/ex6-firebase-auth/src/master/


### Крок 4. Звіт по роботі

1. Розмістіть проект в системі контролю версій.
2. Подайте посилання у якості звіту про виконану роботу.

## Контрольні запитання:
- Що таке та для чого потрібен Vue Router, які є аналоги?
- Які існують UI бібліотеки для Vue та для чого вони потрібні?
- Як реалізується механізм авторизації/аутентифікації?
- Як створювати та працювати з динамічними маршрутами?

## Корисні посилання:
- https://github.com/vuejs/vue-router
- https://ru.vuejs.org/v2/guide/routing.html
- https://router.vuejs.org/guide/advanced/navigation-guards.html
- https://router.vuejs.org/guide/essentials/nested-routes.html
- https://router.vuejs.org/guide/essentials/navigation.html
- https://router.vuejs.org/guide/essentials/route-matching-syntax.html
- https://router.vuejs.org/guide/essentials/named-routes.html
- https://router.vuejs.org/guide/essentials/named-views.html
- https://router.vuejs.org/guide/essentials/redirect-and-alias.html
- https://router.vuejs.org/guide/essentials/passing-props.html
- https://www.freecodecamp.org/news/how-to-add-authentication-to-a-vue-app-using-firebase/
