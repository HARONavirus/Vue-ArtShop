import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/fonts/fonts.css'
import '@/assets/css/base.css'
import '@/assets/css/style.css'


const app = createApp(App)

app.use(createPinia())
app.use(autoAnimatePlugin)
app.use(router)

app.mount('#app')
