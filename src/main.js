import { createApp } from 'vue'
import App from '@/App.vue'
import layouts from '@/components/layouts'

// import intersect from '@/directives/intersect'

import '@/assets/css/reset.css'
import '@/assets/css/global.css'
import '@/assets/css/fonts.css'
import '@/assets/css/socials.css'


const app = createApp(App)

layouts.register(app)

app.mount('#app')