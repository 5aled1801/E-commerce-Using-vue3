// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// emitter
import mitt from 'mitt'
const Emitter = mitt()
// swiper
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
const vuetify = createVuetify({
  components,
  directives
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.provide('Emitter', Emitter)

app.mount('#app')
