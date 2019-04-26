<template>
  <div id="app">
    <div id="nav">
      <button @click="goBack">&lsaquo;</button>
      <router-link to="/">Challenges</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 50px; 
}
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  a {
    font-weight: bold;
    margin: 10px;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
