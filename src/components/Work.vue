<template>
  <div class="work">
    <div class="work--head">
      Portforio<br>
    </div>
    <h2>
      ・・・工事中・・・<br>とりあえずここ見てください<br>
      <a href="https://www.oy-brigade.work/">OY旅団</a>
    </h2>

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
  height: auto;
}

.work--head {
  margin : 5%;
  font-size: 50px;
}

.work--body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center; 
}

.item {
  max-width: 90%;
  min-width: 20%;
  height: auto;

}
@media screen and (max-width: 480px) {
  .work {
    min-height: 100vh;
  }
  .work--body {
    flex-direction: column;
  }    

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
  color: #132044;
}
@media screen and (min-width: 1280px) {


  .work--head {
    padding : 20px;
    font-size: 50px;
    
  }

  .work--body {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    margin: 5%
  }
  
  .item {
    max-width: 40%;
    min-width: 20%;
    height: 30vh;
    padding: 20px;
    
  }
}
</style>
