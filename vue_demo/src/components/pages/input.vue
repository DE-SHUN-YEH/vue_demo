<template>
  <div class="container">
    <div class="container">
      <h4>輸入類型</h4>
      <inputType :input-type="type" :select-check="select"/>
      <button class="btn btn-primary mt-3 me-2" @click="typeText()">text</button>
      <button class="btn btn-primary mt-3 me-2" @click="typeRadio()">radio</button>
      <button class="btn btn-primary mt-3 me-2" @click="typeSelect()">select</button>
    </div>
  </div>
</template>

<script>
import inputType from './inputType'
export default {
  data () {
    return {
      type: 'text',
      select: false,
    }
  },
  components: {
    inputType
  },
  methods: {
    typeText(){
      this.type = 'text';
      this.select = false;
    },
    typeRadio(){
      this.type = 'radio';
      this.select = false;
    },
    typeSelect(){
      this.select = true;
      this.type = '';
    }
  },
}
</script>
