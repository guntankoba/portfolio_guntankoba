<template>
  <div class="profile">
    <div class="item">
        <img class="item" sizes="(max-width: 480px) 90vw" alt="Icon" src="../assets/tori.png">
    </div>
    <div class="item">
      <h2>Name : がんたん</h2>
      面白いもの,新しいもの,独自性のあるものが好きでOY旅団というゲームサークルで
      同人ゲーム製作に務める。<br>
      リンク（OY旅団）<br>
      担当はイラスト（2Dillust, dot）、UI<br>

      普段は普通の会社員。
      開発希望で入ったのになんやかんやで営業や企画も担当してる<br>
      好きな言語はPython<br>
      その他使える、好きな技術：javascript, Vue.js, AWS, tensorflow, chainer
                                      photoshop, illustrator...

    </div>
  </div>
</template>

<script lang="ts">

/*
    
*/
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Profile extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


@media screen and (max-width: 480px) {
  .profile {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: auto;
  }

  .item {
    max-width: 90%;
    flex-direction: column;
  }
  img {
    max-width: 90%;
  }
}


@media screen and (min-width: 1280px) {
  .profile {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50vh;
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
}


</style>
