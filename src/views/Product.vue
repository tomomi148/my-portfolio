<template>
  <div>
    <h1 class="page-title">PRODUCT</h1>
    <p>{{state.desc}}</p>
    <div class="product-contener">
      <div class="product" v-for="(product, index) in state.products" :key="index">
        <img
          class="product-img"
          :class="{ moveable: product.url }"
          :src="require(`../assets/${product.filename}`)"
          @click="moveLink(product.url)">
        <div class="product-desc">
          <h3>{{product.name}}</h3>
          <p v-for="(row, index) in product.desc" :key="index">{{row}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      desc: '公開できるものはまだ少ないのですが、順次増やしていきます！',
      products: [
        {
          name: 'ポートフォリオ',
          // url: 'https://www.google.com', // 仮
          filename: 'site_portfolio.png',
          desc: [
            '当サイトです。',
            'Vue.js で作っています。',
          ],
        },
      ],
    })

    const moveLink = (url) => {
      if (url) window.open(url, '_blank')
    }

    return { state, moveLink }
  },
}
</script>

<style lang="scss" scoped>
.product-contener {
  margin: 10px;
  .product {
    display: inline-block;
    margin: 0 15px 15px;
    background: white;
    border: 5px solid #c8bca0;

    .product-img {
      width: 250px;
      max-height: 200px;
      vertical-align: top;
    }
    .product-desc {
      padding: 5px;

      h3 {
        margin: 0;
      }
      p {
        margin: 0;
      }

    }
    .moveable {
      &:hover {
        cursor: pointer;
      }
    }
  }
}

</style>