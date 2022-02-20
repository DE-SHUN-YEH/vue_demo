<template>
  <div>
    <div class="container">
      <h4 class="mb-3">computed</h4>
      文字反轉
      <br>
      <input type="text" v-model="text">
      <br>
      <span class="ms-1">{{ reverseText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  computed: {
    reverseText(){
      return this.text.split('').reverse().join('');
    }
  }
}
</script>
