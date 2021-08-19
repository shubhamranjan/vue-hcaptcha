<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <button @click="hcaptcha">Execute hcaptcha via options api</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Options',
  props: {
    msg: String,
  },
  methods: {
    async hcaptcha () {
      console.log('hcaptcha clicked')
      
      await this.$hcaptchaLoaded()

       const token = await this.$processhcaptcha()
        console.log(token)
     }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
