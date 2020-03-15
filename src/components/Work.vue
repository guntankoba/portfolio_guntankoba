<template>
  <div class="work">
    <div class="work--head">
      Portforio
    </div>
    <div class="work--body">    
      <work-item></work-item>
      <work-item></work-item>
      <work-item></work-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import WorkItem from './WorkItem.vue';

@Component({
  components: {
    WorkItem,
  },
})
export default class Work extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.work {
  padding: 50px;
  height: 50vh;
  background-color: aquamarine;
}

.work--head {
  padding : 20px;
  font-size: 50px;
}

.work--body {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.item {
  max-width: 40%;
  min-width: 20%;
  height: 30vh;
  padding: 20px;
  background-color:dimgray;
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
