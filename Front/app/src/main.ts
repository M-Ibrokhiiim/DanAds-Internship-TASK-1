import { createApp } from 'vue'
import './style.css'
import router from './router'
import practicePlugin from './plugins/practicePlugin'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import  en from '@/locales/en.json'
import uz from '@/locales/uz.json'


const i18n = createI18n({
    legacy: false,  
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en, uz}
})


const  app = createApp(App)
app.use(router)
app.use(practicePlugin)
app.use(i18n)

app.mount('#app')
