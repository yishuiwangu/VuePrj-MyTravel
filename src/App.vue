<template>
  <div id="app">
   <!-- <img src="./assets/logo.png"> -->

  <keep-alive>
    <!-- 显示的是当前路由地址所对应的内容-->
    <router-view/>
    
  </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
