<template>
  <div>
    <div class="container">
      <h4>api</h4>
      <ul v-for="data of datas">
        <li>居住地: {{ data.city }}</li>
        <li>姓名: {{ data.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datas: {}
    }
  },
  created() {
    const vm = this;
    this.$http.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8').then((response) => {
      console.log(response.data);
      vm.datas = response.data;
    })
  },
}
</script>

<style scoped lang="scss">
  $letter-spacing: .3px;
  $line-height: 1.6rem;
  li {
    letter-spacing: $letter-spacing;
    line-height: $line-height;
  }
</style>