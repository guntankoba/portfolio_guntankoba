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
  background-color: rgba(240, 248, 255, 0.185);
  background-blend-mode:lighten;
  height: 30vh;
  max-width: 100%;
  padding: 5%;
  margin-block-end: 5%;
}
.work--title {
  font-size: 250%;
  padding: 5%;
}
.work--body {
  
}
@media screen and (min-width: 1280px) {
  .work--item {
    background-image: url("../assets/Noisers_logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 40%;

  }
  .work--title {
    font-size: 250%;
  }
  .work--body {
    
  }
}
</style>
