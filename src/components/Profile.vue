<template>
  <div id="profile">
    <img class="profile--item" sizes="(max-width: 480px) 90vw" alt="Icon" src="../assets/tori.png">
    <div class="profile--item">
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
#profile {
  display: flex;
  flex-direction: column;;
  justify-content: space-around;
  align-items: center;
  height: auto;
}
.profile--item {
  margin: 10%
}
img {
  max-width: 90%;
}


@media screen and (min-width: 1280px) {
  #profile {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 50vh;
  }
  img {
    max-height: 90%;
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
