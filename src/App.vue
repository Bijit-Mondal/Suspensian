<template>
  <div id="app">
    <div style="margin-bottom:100px">
      <NavBar/>
    </div>
      <!--<div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>-->
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
