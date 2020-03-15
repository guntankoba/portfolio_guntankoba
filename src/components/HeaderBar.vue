<template>
  <header class="header">
    <ul >
      <li><button v-scroll-to="'#top'">Top</button></li>
      <li>Profile</li>
      <li>Work</li>
      <li>Contact</li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HeaderBar extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-size: 30px;
  display: flex;
  justify-content: center;
  background-color: black;
}
ul {
  list-style-type: none;
  padding: 0;
  position: fixed;
}
li {
  display: inline-block;
  margin: 0 50px;
  padding: 20px;
}
a {
  color: #42b983;
}
</style>
