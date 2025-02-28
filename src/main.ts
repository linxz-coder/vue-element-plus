import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.mount('#app')
app.use(ElementPlus, { size: 'small', zIndex: 3000 })