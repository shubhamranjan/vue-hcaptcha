<template>
  <div class="hello">
    <hr />
    <button @click="processCaptcha">Execute hcaptcha via composition api</button>
    <div id='hcaptcha-sample-container'></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from "vue";
import { VuehCaptcha, usehCaptcha } from '@shubhamranjan/vue-hcaptcha'


export default defineComponent({
  name: "Composition",
  setup(){
       const { processhcaptcha, hcaptchaLoaded } = usehCaptcha()
    const processCaptcha = async () => {
      // (optional) Wait until hcaptcha has been loaded.
      await hcaptchaLoaded()

      // process hCaptcha
      const token = await processhcaptcha()

      console.log(token)
      // Do stuff with the received token.
    }

    return {
      processCaptcha
    }
  },
});
</script>