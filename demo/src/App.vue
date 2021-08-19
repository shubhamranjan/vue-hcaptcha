<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Options msg="Welcome to Your Vue.js + TypeScript App"/>
  <Composition />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Options from './components/Options.vue';
import Composition from './components/Composition.vue';

export default defineComponent({
  name: 'App',
  components: {
    Options,
    Composition
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
