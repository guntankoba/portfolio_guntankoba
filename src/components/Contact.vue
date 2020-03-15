<template>
  <div class="contact">
    <div class="contact--title">
      Contact
    </div>
    <div class="contact--body">
      <div class="contact--item">
        <a href="https://twitter.com/guntankoba"><font-awesome-icon :icon="['fab', 'twitter-square']" /></a>
      </div>
      <div class="contact--item">
        <a href="https://github.com/guntankoba"><font-awesome-icon :icon="['fab', 'github-square']" /></a>
      </div>
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
  height: 50vh;
  padding: 50px;
}

.contact--title {
  padding : 20px;
  font-size: 50px;
}
.contact--body {
  display: flex;
  justify-content: center;
  padding: 30px;
  font-size: 300%;
}
.contact--item {
  padding: 30px;
}

.icon {
  border-radius: 50%;
  width: 15%;
  height: 15%
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
