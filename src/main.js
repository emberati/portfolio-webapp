import { createApp } from 'vue'
import App from '@/App.vue'

import intersect from '@/directives/intersect'

import '@/assets/css/reset.css'
import '@/assets/css/global.css'
import '@/assets/css/fonts.css'
import '@/assets/css/socials.css'
import paginate from '@/directives/paginate'


const app = createApp(App)

// app.use(VueObserveVisibility)
app.directive('intersect', intersect)
app.directive('paginate', paginate)

app.mount('#app')