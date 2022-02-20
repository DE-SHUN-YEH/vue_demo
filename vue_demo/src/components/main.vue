<template>
  <div>
    <Navbar/>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

