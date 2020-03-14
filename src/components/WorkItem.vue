<template>
  <div class="work--item">
    <div class="work--title">
      {{ title }}
    </div>
    <div class="work--body">
      {{ body }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WorkItem extends Vue {
  title: string = "Noisers"
  body: string = "2018年にOY旅団により開発されたゲーム"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .work--item {
    background-image: url("../assets/Noisers_logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 40vh;
    width: 30%
  }
  .work--title {
    font-size: 300%;
  }
  .work--body {
    
  }
</style>
