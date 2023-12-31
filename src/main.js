// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
// agregando pinia
import {pinia} from'pinia'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
