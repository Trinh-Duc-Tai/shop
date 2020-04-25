<template>
  <div id="app">
    <Navba :numberItems="numIt"/>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import KhoiLogo from './components/KhoiLoGo.vue'
import Navba from './components/Navba.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    Navba,
    Footer
    // KhoiLogo
  },
  data(){
    return{
      numIt: 0,
    }
  }
}
</script>

<style>

</style>
