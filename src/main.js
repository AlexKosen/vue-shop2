import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './vuex/store'
import 'material-design-icons-iconfont'
import './assets/styles/css/bootstrap.css'
import './assets/styles/css/style.scss'
import './assets/styles/css/font-awesome.min.css'
import './assets/styles/css/responsive.css'



const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
