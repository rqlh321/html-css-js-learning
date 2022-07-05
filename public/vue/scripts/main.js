import { createApp } from 'vue'
import MyApp from './MyApp.js'

const app = createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
})

app.mount('#app')