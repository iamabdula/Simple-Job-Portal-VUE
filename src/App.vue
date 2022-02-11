<template>
  <div id="nav" >
    <!-- <label to="/">Job Portal</label> -->
    <router-link to="/" class="logo">Job Portal</router-link> 

    <router-link to="/">Home</router-link> |
    <router-link :to="{ name:'Jobs' }">Jobs</router-link> | 
    <router-link to="/about">About</router-link> 
  </div>
  <router-view/>
    <Footer/>
</template>
<script>
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  components: { Footer}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

#nav {
  padding: 30px;
  background: #2c3e50;
  color: white;
  font-weight: bold;
  text-align: right;
}
#nav label{
  float: left;
  cursor: pointer;
}
.logo{
  float: left;
  cursor: pointer;
  text-decoration: none;
  color: white !important;
}
#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
    color: white;
    padding: 0 6px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
