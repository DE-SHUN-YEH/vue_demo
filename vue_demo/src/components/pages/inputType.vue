<template>
  <div>
    <select v-if="selectCheck" v-model="text">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <input :type="inputType" v-else v-model="text" value="Hello World!">
    <label v-if="inputType == 'radio'">Hello World!</label>
    
  </div>
</template>

<script>
export default {
  name: 'inputType',
  props: ['inputType', 'selectCheck'],
  data() {
    return {
      text: 'Hello World!',
    }
  },
}
</script>

<style scoped lang="scss">
  $width: 15rem;
  select {
    width: $width;
  }
</style>