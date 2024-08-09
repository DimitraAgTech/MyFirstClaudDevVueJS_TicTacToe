import { createApp } from 'vue'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import App from './App.vue'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(store)
app.use(BootstrapVue3)
app.mount('#app')