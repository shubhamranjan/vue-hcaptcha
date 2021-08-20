<template>
  <div id="app">
    <hcaptcha
      sitekey="10000000-ffff-ffff-ffff-000000000001"
      @verify="doSomething"
    />
  </div>
</template>



<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { hcaptcha } from "@/entry.esm";

export default defineComponent({
  name: "ServeDev",
  components: {
    hcaptcha,
  },
  methods: {
    doSomething(response: string, responseKey: string): void {
      console.log(response, responseKey);
    },
  },
});
</script>