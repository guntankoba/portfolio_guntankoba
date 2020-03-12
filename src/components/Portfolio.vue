<template>
  <div class='portfolio'>
    <header-bar></header-bar>
    <div class='body'>
      <div class='top'>
        <div class='top-items'>
          <h1> guntankoba</h1>
          がんたんの色々が入ってるサイトです。<br>
          適当に見ていってください。

        </div>
      </div>
      <profile></profile>
      <work></work>
      <contact></contact>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HeaderBar from './HeaderBar.vue';
import Profile from './Profile.vue';
import Work from './Work.vue';
import Contact from './Contact.vue';
@Component({
  components: {
    HeaderBar,
    Profile,
    Work,
    Contact,
  },
})
export default class Portfolio extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portfolio {
 
}

.body {
}
.top {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
  height: 80vh;
  background-color: teal;
}
h1 { 
  padding: 50px;
  font-size: 120px;
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
