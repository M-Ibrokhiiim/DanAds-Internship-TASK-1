import { createApp } from 'vue'
import './style.css'
import router from './router';
import practicePlugin from './plugins/practicePlugin';
import App from './App.vue'

const  app = createApp(App)
app.use(router)
app.use(practicePlugin)
app.mount('#app')
