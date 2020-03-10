<template>
  <div class="contact">
    <div class="item">
      Please Contact Me !!!
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contact {
  display: flex;
  justify-content: center;

  padding: 50px;
}

.icon {
  border-radius: 50%;
  width: 15%;
  height: 15%
}

.item {
  max-width: 35%
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
