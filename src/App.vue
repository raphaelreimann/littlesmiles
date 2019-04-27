<template>
  <div id="app">
    <div id="nav">
      <div class="flex, content">
        <a class="flexitem, btn-back" @click="goBack">&lsaquo;</a>
        <router-link to="/"><span class="flexitem">CHALLENGES</span></router-link>
        <router-link to="/profile"><span class="dot"></span><!--img src="assets/Profile icon.png" alt="Profile Icon" class="flexitem, profile-img"--></router-link>
      </div>
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
@import url('https://fonts.googleapis.com/css?family=Quicksand');
body{
  background-color: #42b983;
  
  padding: 0%;
  margin: 0%;
}
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  padding-top: 50px; 
  height: 100%;
  margin: 0px;
}
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // text-align: center;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(to left, #1F1B3E, #D13089);
  border-bottom: 8px solid white;
  .content{
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    width: 100%;
    a {
      font-weight: bold; 
      text-decoration: none;
      margin-right: 0px;
      color: #2c3e50;
      // &.router-link-exact-active {
      //   color: #42b983;
      // }
    }
    // .profile-item{
    //   width: 20px;
    // }
    .dot {
      margin-top: -10px;
      height: 35px;
      width: 35px;
      background-color: #f5f5f5;
      border-radius: 50%;
      display: flex;
    }
    .btn-back{
      font-size: 25px;
    }
  }
}
</style>
