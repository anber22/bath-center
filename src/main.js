import { createApp } from 'vue';
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue';

import store from './store'
import router from './router'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.mount('#app')