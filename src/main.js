// App & Pinia importing
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// App initialize
import App from './App.vue';

// Router initialize
import router from './router/index.js';

// CSS initialize
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

// App create & App mount 
const pinia = createPinia();
const app = createApp(App);
app.use(pinia).use(router).mount('#app');