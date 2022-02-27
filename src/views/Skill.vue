<template>
  <div class="skill-contener">
    <h1 class="page-title">SKILL</h1>
    <p>※{{state.date}}時点</p>
    <div class="catchup-contener">
      <p class="catchup-row" v-for="(row, index) in state.catchup" :key="index">{{row}}</p>
    </div>

    <div class="skill-card" v-for="(card, index) in  state.cards" :key="index">
      <h2>{{card.title}}</h2>
      <table>
        <tbody>
          <tr class="skill-item" v-for="(skill, index) in card.skills" :key="index">
            <td class="skill-name">{{skill.name}}</td>
            <td class="skill-years" v-if="skill.years">{{skill.years}}</td>
            <td class="skill-lebel" v-if="skill.lebel">
              <img v-for="n of skill.lebel" :key="n" src="../assets/star.png" alt="">
            </td>
            <td class="skill-desc" v-if="skill.desc">{{skill.desc}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      date:'2022年2月',

      catchup: [
        '目標は、ユーザーがより良い体験のできるプロダクトを作ること',
      ],

      cards:[
        {
          title: 'Design, Coding',
          skills: [
            { name: 'HTML5', years: '3年0か月', lebel: 4 },
            { name: 'CSS', years: '3年0か月', lebel: 3 },
          ]
        },
        {
          title: 'Frontend',
          skills: [
            { name: 'JavaScript', years: '3年0か月', lebel: 4 },
            { name: 'Vue.js', years: '2年10か月', lebel: 4 },
            { name: 'Vuex', years: '2年9か月', lebel: 4 },
            { name: 'React.js', years: '1か月', lebel: 1 },
            { name: 'jQuery', years: '1か月', lebel: 1 },
          ]
        },
        {
          title: 'Backend',
          skills: [
            { name: 'Python', years: '3か月', lebel: 2 },
            { name: 'C#', years: '3か月', lebel: 2 },
            { name: 'Perl', years: '3か月', lebel: 1 },
          ]
        },
        {
          title: 'License',
          skills: [
            { name: 'kintone アソシエイト'}
          ]
        },
        {
          title: 'Other Skill',
          skills: [
            { name: 'kintone開発', desc: 'JavaScriptカスタマイズ含め可能'}
          ]
        },
        {
          title: 'Studying',
          skills: [
            { name: 'React.js'},
            { name: 'Node.js', desc: '業務での利用経験あり。体系的に再学習中。'},
            { name: '基本情報技術者'},
          ]
        }
      ]
    })

    return { state }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
}

.catchup-contener {
  padding: 0 0 20px;
  .catchup-row {
    margin: 0;
  }
}

.skill-card {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  width: 400px;
  min-height: 250px;
  padding: 20px;
  margin: 15px;
  background: #fdfdfb;
  position:relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    transform: rotate(-35deg);
    width: 80px;
    height: 25px;
    background: #fbe4e2;
  }
  &::before {
    top: -10px;
    left: -25px;
    border-bottom: 1px solid #e5eaeb;
  }
  &::after {
    bottom: -10px;
    right: -25px;
    border-top: 1px solid #e5eaeb;
  }
  table {
    margin: 0;
  }
  h2 {
    margin: 0 0 20px;
    color: #67A5da;
  }
  .skill-item {
    font-size: 18px;
    color: #0065b2;
    td {
      min-width: 90px;
    }
    .skill-name {
      text-align: left;
      font-weight: bold;
    }
    .skill-years {
      text-align: right;
    }
    .skill-lebel {
      text-align: left;
      padding: 0 0 0 15px;
      img {
        height: 22px;
        width: 22px;
        margin: 2px;
        vertical-align: middle;
      }
    }
    .skill-desc {
      text-align: left;
      padding: 0 0 0 15px;
      max-width: 210px;
    }
  }
}
</style>