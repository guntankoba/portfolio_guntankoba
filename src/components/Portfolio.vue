<template>
  <div class='portfolio'>
    <header-bar></header-bar>
    <div class='body'>
      <div class='top'>
        <div class='top-items'>
          <div id='top'>
            <h1 > guntankoba</h1>
            がんたんの色々が入ってるサイトです。
            適当に見ていってください。
            <div v-scroll="handleScroll" class='scroll-test'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
          </div>
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
// Scroll directive
import scroll from '../scroll';

@Component({
  components: {
    HeaderBar,
    Profile,
    Work,
    Contact,
  },
  directives: {
    scroll
  },
 
})
export default class Portfolio extends Vue {
  @Prop() private msg!: string;
  el = '#app'
  handleScroll(evt: Event, el: any) {

    if (window.scrollY > 300) {
        console.log('over 50');
        console.log(el.style.font)
        console.log(window.scrollY)
        el.setAttribute(
          'style',
          'font-size: 100px'
        )
      }
      return window.scrollY > 1000
  }

  // handleScroll(): function (evt, el) {
  //     if (window.scrollY > 50) {
  //       el.setAttribute(
  //         'style',
  //         'opacity: 1; transform: translate3d(0, -10px, 0)'
  //       )
  //     }
  //     return window.scrollY > 100
  //   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portfolio {
 
}
.scroll-test {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
.body {
}
.top {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
  height: 100vh;
  background-color: teal;
}
h1 { 
  padding: 50px;
  font-size: 10vw;
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
