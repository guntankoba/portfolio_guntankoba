<template>
  <div id="app">
    <Portfolio msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';



import Portfolio from './components/Portfolio.vue';
@Component({
  components: {
    Portfolio,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  scroll-behavior: smooth;
  /*background: linear-gradient(#3642AF, #EC843E);*/
}

body{
	margin: 0;
  font-size: 1.6em;
}
</style>
