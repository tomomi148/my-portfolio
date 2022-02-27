<template>
  <div class="item-contener">
    <h2 class="item-title">{{props.items.title}}</h2>
    <table>
      <tbody>
        <tr v-for="(row, index) in props.items.list" :key="index">
          <td class="item-name">{{row.name}}</td>
          <td class="item-value">{{row.detail}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: Object,
  },
  setup(props) {
    return { props }
  },
}
</script>

<style lang="scss" scoped>
table {
  margin: auto;
  td {
    text-align: left;
  }
}

.item-contener {
  margin: 0 0 30px;
  .item-title {
    margin: 0;
  }
  .item-name {
    width: 100px;
    padding: 0 12px;
  }
  .item-value {
    width: 325px;
  }
}
</style>