<template>
 <div class="bg-nav">
  <router-link to="/" class="menu-li">  <i class="fa fa-home"></i>  صفحه اصلی </router-link>
  <router-link to="/users" class="menu-li"> <i class="fa fa-photo"></i>  کارهای روزمزه </router-link>
  <router-link to="/gallery" class="menu-li">  <i class="fa fa-file-text-o"></i>  گالری </router-link>
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
