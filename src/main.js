import { createApp } from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

const app = createApp(App)

app.config.productionTip = false
app.use(Vuetify)

app.render = function(h) {
    return h(App)
}

app.mount('#app')