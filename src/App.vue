<template>
 <div class="bg-nav">
  <router-link to="/" class="menu-li">    صفحه اصلی </router-link>
  <i class="fa fa-angle-left align-middle"></i>
  <router-link to="/users" class="menu-li">   کارهای روزمزه </router-link>
    <i class="fa fa-angle-left align-middle"></i>
  <router-link to="/gallery" class="menu-li">   گالری </router-link>
  <img src="@/assets/img/logo.png">
</div>

<router-view></router-view>
</template>

<script>

export default {
  setup(){
    return{}
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import './assets/css/style.css'
</style>
