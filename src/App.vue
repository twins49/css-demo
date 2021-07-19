<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/touxiang">头像</router-link> |
      <router-link to="/didian">地点</router-link> |
      <router-link to="/wechat">微信</router-link> |
      <router-link to="/yes">勾号</router-link> |
      <router-link to="/view">眼睛</router-link> |
      <router-link to="/gps">导航</router-link> |
      <router-link to="/logo">心形</router-link> |
      <router-link to="/ps">ps图标</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
