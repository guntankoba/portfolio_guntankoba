<template>
  <header class="header" v-scroll="handleScroll" v-show="overScroll">
    <ul id="header-bar">
      <li class="button" v-scroll-to="'.top'">Top</class="button"></li>
      <li class="button" v-scroll-to="'#profile'">Profile</li>
      <li class="button"  v-scroll-to="'.work'">Work</li>
      <li class="button" v-scroll-to="'.contact'">Contact</li>
      <li class="button" >{{ positionScroll }}</li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import scroll from '../scroll';
@Component({
  directives: {
    scroll
  },
})
export default class HeaderBar extends Vue {
  el = '#app'
  positionScroll : any = window.scrollY;
  overScroll : boolean = true;
  handleScroll(evt: Event, el: any) {
    this.positionScroll = window.scrollY;
    if (window.scrollY > 400) {
      this.overScroll = false;
    }
    else {
      this.overScroll = true;
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header-bar {
  background-color: rgb(29, 29, 29);
}

.header {
  font-size: 30px;
  display: flex;
  justify-content: center;
  background-color: black;
}
.button{
  
  font-size: 20px;
  color: white;
  display: inline-block;
  transition: all .2s;
  position: relative;
  padding: 20px 25px;
  position: relative;
  top: 0;
  cursor: pointer;
  margin:0 20px;
}
.btn-9:active {
  top: 3px;
  box-shadow: 0 2px 0px #387796;
  transition: all .2s;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0%;
  min-width: 100%;
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
