import { createApp } from 'vue'
import App from './App.vue'
import { VuehCaptcha } from '@shubhamranjan/vue-hcaptcha'
createApp(App)
.use(VuehCaptcha, 
    { 
        siteKey: '10000000-ffff-ffff-ffff-000000000001', 
        loaderOptions : {
            explicitRenderParameters : {
                container: "hcaptcha-sample-container"
            }
        } 
    })
.mount('#app')
