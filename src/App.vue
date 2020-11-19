<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Make a wish</router-link> |
      <router-link to="/items">See wishlist</router-link> 
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
  margin-bottom: 30px;
  font-size: 20px;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-right: 10px;
  margin-left: 10px;
}

#nav a.router-link-exact-active {
  color:#fd9566;
  text-decoration: none;
  margin-right: 10px;
  margin-left: 10px;
}
</style>
