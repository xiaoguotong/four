<!-- App.vue -->
<template>
      <div>
            <h2>欢迎来到SSR渲染页面</h2>
            <router-link to="/home">home</router-link>
            <router-link to="/child">child</router-link>
            <router-view></router-view>
      </div>
</template>


<script>
export default {
      name:'App',
      mounted() {

      }
}
</script>


<style>

</style>