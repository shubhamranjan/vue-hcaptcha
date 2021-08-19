<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { hcaptcha } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  hcaptcha,
  // }
});
</script>

<template>
  <div id="app">
    <shubhamranjan-vue-hcaptcha-sample />
  </div>
</template>
