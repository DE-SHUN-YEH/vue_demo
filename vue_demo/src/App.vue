<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  created() { 
    this.$http.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
    .then((response) => {
      console.log(response.data)
    })
  },
}
</script>

<style lang="scss">
@import "./assets/all.scss";

</style>
