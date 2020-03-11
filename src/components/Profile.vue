<template>
  <div class="profile">
    <img class="icon" alt="Icon" src="../assets/tori.png">
    <div class="item">
      <h2>Name : がんたん</h2>
      面白いものが好きでOY旅団というゲームサークルで
      同人ゲーム製作に務める。<br>
      リンク（OY旅団）<br>
      担当はイラスト（2Dillust, dot）、UI、雑務<br>

      普段は普通の会社で企画を担当（デザインでも開発でもないんだ・・・）<br>
      好きな言語はPython<br>
      その他使える技術：javascript, Vue.js, AWS, tensorflow, chainer
                                      photoshop, illustrator...

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Profile extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.profile {
  display: flex;
  justify-content: center;

  padding: 50px;
}

.icon {
  border-radius: 50%;
  width: 15%;
  height: 15%
}

.item {
  max-width: 35%
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
