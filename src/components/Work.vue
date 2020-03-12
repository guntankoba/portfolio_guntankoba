<template>
  <div class="work">
    <div class="item">
      <h2>Noisers</h2>
    </div>
    <div class="item">
      <h2>Noisers</h2>
    </div>
    <div class="item">
      <h2>Noisers</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Work extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.work {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  height: 50vh;
}

.item {
  max-width: 40%;
  padding: 30px;
}

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
