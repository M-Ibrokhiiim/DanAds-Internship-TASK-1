import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import practicePlugin from './plugins/practicePlugin'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import  en from '@/locales/en.json'
import uz from '@/locales/uz.json'
import { Plugin1, Plugin2 } from '@/stores/plugins/practicePlugins'
 


const i18n = createI18n({
    legacy: false,  
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en, uz}
})

const pinia = createPinia()
pinia.use(Plugin1)
pinia.use(Plugin2)

const  app = createApp(App)
app.use(router)
app.use(practicePlugin)
app.use(i18n)
app.use(pinia)

app.mount('#app')
