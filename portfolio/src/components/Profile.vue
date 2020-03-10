<template>
  <div class="profile">
    <img class="icon" alt="Icon" src="../assets/tori.png">
    <div class="item">
      Name : がんたん
      面白いものが好きでOY旅団というゲームサークルで
      同人ゲーム製作に務める。
      リンク（OY旅団）
      担当はイラスト（2Dillust, dot）、UI、雑務

      普段は普通の会社で企画を担当（デザインでも開発でもないんだ・・・）
      好きな言語はPython
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
  max-width: 80%;
  padding: 50px;
}

.icon {
  border-radius: 50%;
  width: 20%;
  height: 20%
}

.item {
  max-width: 40%
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
