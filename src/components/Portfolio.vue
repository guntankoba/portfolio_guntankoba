<template>
  <div class='portfolio'>
    <header-bar></header-bar>
    <h1>guntankoba</h1>
    おはようございます。<br>
    がんたんの色々が入ってるサイトです。<br>
    適当に見ていってください。

    <profile></profile>
    <work></work>
    <contact></contact>
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
