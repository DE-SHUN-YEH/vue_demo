<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <div class="mx-auto">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link fs-4 px-sm-3 px-1" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-4 px-sm-3 px-1" to="/page">Page</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-4 px-sm-3 px-1" to="/">回起始頁</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
 $flex-direction: row;
  ul.navbar-nav {
    flex-direction: $flex-direction;
  }
</style>