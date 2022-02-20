<template>
  <div class="mx-sm-auto widthcontrol">
    <Menu/>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from './menu';

export default {
  components: {
    Menu
  }
}
</script>

<style scoped lang="scss">
  $w-300: 300px;
  .widthcontrol{
    max-width: $w-300;
  }
</style>