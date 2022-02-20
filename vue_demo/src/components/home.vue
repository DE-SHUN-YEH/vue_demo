<template>
  <div>
    <div class="text-center pt-4 fullscreen"
     :class="{'red': bgColor == 'red', 'blue': bgColor == 'blue', 'green': bgColor == 'green'}">
      <h5 class="mb-3">更改此頁背景顏色、主題</h5>
      <button class="btn btn-danger m-1" @click="bgred()">主題一</button>
      <button class="btn btn-info m-1" @click="bgblue()">主題二</button>
      <button class="btn btn-success m-1" @click="bggreen()">主題三</button>
      <button class="btn btn-secondary m-1" @click="bgColor = '', title = ''">復原</button>
      <span class="d-block mt-3" v-if="title != ''">{{ title }}</span>
    </div>
  </div>
</template>

<script>
import global from './Global'
export default {
  data () {
    return {
      bgColor: '',
      title: ''
    }
  },
  methods: {
    bgred(){
      const vm = this;
      vm.bgColor = global.bgRed;
      vm.title = '主題一';
    },
    bgblue(){
      const vm = this;
      vm.bgColor = global.bgBlue;
      vm.title = '主題二';
    },
    bggreen(){
      const vm = this;
      vm.bgColor = global.bgGreen;
      vm.title = '主題三';
    }

  },
}
</script>

<style scoped lang="scss">
  $colorRed: #c65858;
  $colorBlue: #6161ee;
  $colorGreen: #4e9e4e;
  $colorWhite: #fff;
  $fullscreen: 100vh;
  $fontSize: 70px;
  div .red{
    background-color: $colorRed;
  }
  div .blue{
    background-color: $colorBlue;
  }
  div .green{
    background-color: $colorGreen;
  }
  .fullscreen {
    height: $fullscreen;
  }
  span {
    color: $colorWhite;
    font-size: $fontSize;
  }
</style>
