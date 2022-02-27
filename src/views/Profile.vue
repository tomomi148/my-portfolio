<template>
  <div class="profile-contener">
    <img class="self-img" src="../assets/icon.png">
    <div class="intro">
      <p class="name">
        <span class="name-kanji">{{state.name}}</span>
        <span class="name-kana">{{state.nameKana}}</span>
      </p>
      <p class="intro-item" v-for="(row, index) in state.intro" :key=index>{{row}}</p>
    </div>

    <Table :items="state.history" />
    <Table :items="state.hobbies" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import Table from '../components/Table.vue'

export default {
  components: {
    Table,
  },
  setup() {
    const state = reactive({
      name: '佐藤 友美',
      nameKana: 'Tomomi Sato',
      intro: [
        '1991.10.21 生まれ。新潟出身。',
        '山形で社会学を軸に、地理学・心理学などを学ぶ。',
        '人間の考えること、作り出すものが好き。',
        '好きな言葉は「優雅な生活が最高の復讐である」',
        '「芸術が日常を照らす」など。',
      ],
      history:{
        title: '来歴',
        list: [
          {name: '1991.10.21', detail: '誕生。新潟で育つ。'},
          {name: '2014.03', detail: '山形大学で社会学を学び卒業。'},
          {name: '2014-2015', detail: '山形で販促や市場調査のお仕事。'},
          {name: '2015-2019', detail: '仙台で秘書のお仕事。'},
          {name: '2019-現在', detail: 'エンジニアに転向。仙台でITのお仕事。'},
          {name: '', detail: 'kintoneを基盤にJS,Vue.js等での開発を学ぶ。'}
        ]
      },
      hobbies: {
        title: '趣味',
        list: [
          {name: '創作活動', detail: '絵を描いたり、ARで遊んだり、色々。'},
          {name: '芸術鑑賞', detail: '映画鑑賞、美術展めぐりなど。'},
          {name: '燻製', detail: '燻すと何でも美味しい。'},
          {name: '猫', detail: '動画・画像の摂取。本当は飼いたいです。'},
        ]
      }
    })
    return { state }
  },
}
</script>

<style lang="scss" scoped>
.self-img {
  height: 175px;
  width: 175px;
  border-radius: 70% 30% 30% 70% / 30% 30% 70% 70%;
  padding: 0 10px;
}

.intro {
  display: inline-block;
  width: 400px;
  padding: 0 20px 30px;
  vertical-align: top;
  text-align: left;
  p {
    margin: 0;
  }
  .name {
    color: #c8bca0;
    .name-kanji {
      font-size: 26pt;
      display: inline-block;
      height: 45px;
      vertical-align: bottom;
    }
    .name-kana {
      font-size: 16px;
      display: inline-block;
      padding: 0 10px;
    }

  }
}
</style>