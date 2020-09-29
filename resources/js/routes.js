import home from "./components/home/Home";
import dashboard from "./components/Dashboard";
import user from "./components/users/users.vue";
export const routes = [
    { path: '/dashboard', component: dashboard },
    { path: '/home', component: home },
    { path: '/users', component: user },

]
