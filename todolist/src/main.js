// Composables
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';

// Components
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/main.css';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
