<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/touxiang">头像</router-link> |
      <router-link to="/didian">地点</router-link> |
      <router-link to="/wechat">微信</router-link> |
      <router-link to="/yes">勾号</router-link> |
      <router-link to="/view">眼睛</router-link> |
      <router-link to="/gps">导航</router-link> |
      <router-link to="/logo">心形</router-link> |
      <router-link to="/ps">ps图标</router-link> |
      <router-link to="/layout">LayOut布局</router-link> |
      <router-link to="/loading">条形加载条</router-link> |
      <router-link to="/HoverTips">鼠标悬浮</router-link> |
      <router-link to="/StateBall">悬浮球</router-link> |
      <router-link to="/navbar">纯CSS标签导航</router-link> |
      <router-link to="/aspect">16:9</router-link> |
    </div>
    <div class="nav2">
      <router-link to="/clock">实现时钟翻牌器</router-link> |
      <router-link to="/threeCrossbar">三道杠</router-link> |
      <router-link to="/sticky">position: sticky</router-link> |
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

#nav, .nav2 {
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
