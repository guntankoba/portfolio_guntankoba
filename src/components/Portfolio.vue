<template>
  <div class='portfolio'>
    <header-bar></header-bar>
    <div class='body'>
      <div class='top'>
        <div class='top-items'>
          <h1 > guntankoba</h1>
          がんたんの色々が入ってるサイトです。<br>
          ちまちま改修しながら作ってるのでデザインなどもまだです<br>
          適当に見ていってください。<br>
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
  
  handleScroll(evt: Event, el: any) {

    if (window.scrollY > 300) {
        el.setAttribute(
          'style',
          'font-size: 50px'
        )
      }
      return window.scrollY > 1000
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portfolio {  
    
  background: linear-gradient(182deg, #7a74d0, #e3a069, #92e4e1, #d79ce4, #363a7b);
  background-size: 1000% 1000%;

  -webkit-animation: Sunset 24s ease infinite;
  -moz-animation: Sunset 24s ease infinite;
  animation: Sunset 24s ease infinite; 
 
}

.scroll-test {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.top {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
  height: 100vh;
  
}

.top--item {

}
h1 { 
  font-size: 15vw;
  
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

@media screen and (min-width: 768px) {

}
@media screen and (min-width: 1280px) {
   .top {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  } 
  h1 { 
    font-size: 10vw;
  }
}


@-webkit-keyframes Sunset {
    0%{background-position:47% 0%}
    50%{background-position:54% 100%}
    100%{background-position:47% 0%}
}
@-moz-keyframes Sunset {
    0%{background-position:47% 0%}
    50%{background-position:54% 100%}
    100%{background-position:47% 0%}
}
@keyframes Sunset {
    0%{background-position:47% 0%}
    50%{background-position:54% 100%}
    100%{background-position:47% 0%}
}
</style>
