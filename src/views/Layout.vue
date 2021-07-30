<template>
  <div class="layout-wrap">
    <p>
      由于浮动节点在位置上不能高于前面或平级的非浮动节点，否则会导致浮动节点下沉。因此在编写HTML结构时，将中间列节点挪到右列节点后面。
    </p>
    <p>圣杯布局float + margin-left/right + padding-left/right</p>
    <div class="grail-layout-x">
      <div class="left"></div>
      <div class="right"></div>
      <div class="center"></div>
    </div>
    <p>圣杯布局/双飞翼布局flex</p>
    <div class="grail-layout">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
    <p>均分布局</p>
    <div class="average-layout">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
      <div class="four"></div>
    </div>
    <p>均分布局 flex</p>
    <div class="average-layout-flex">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
      <div class="four"></div>
    </div>
    <p>居中布局</p>
    <p>在此直接上一个目前最简单最高效的居中方式。display:flex与margin:auto的强行组合，同学们自行体会。</p>
    <div class="center-layout">
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Layout',
  components: {
  },
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.layout-wrap {
  @include flex(column, center, center);
}

.one {
  background-color: #f66;
}
.two {
  background-color: #66f;
}
.three {
  background-color: #f90;
}
.four {
  background-color: #09f;
}

.grail-layout-x {
  padding: 0 100px;
  width: 400px;
  height: 400px;
  .left {
    float: left;
    margin-left: -100px;
    width: 100px;
    height: 100%;
    background-color: #f66;
  }
  .right {
    float: right;
    margin-right: -100px;
    width: 100px;
    height: 100%;
    background-color: #66f;
  }
  .center {
    height: 100%;
    background-color: #3c9;
  }
}

.grail-layout {
  display: flex;
  width: 400px;
  height: 400px;
  .left {
    width: 100px;
    background-color: #f66;
  }
  .center {
    flex: 1;
    background-color: #3c9;
  }
  .right {
    width: 100px;
    background-color: #66f;
  }
}

.average-layout {
  width: 400px;
  height: 400px;
  div {
    float: left;
    width: 25%;
    height: 100%;
  }
}

.average-layout-flex {
  display: flex;
  width: 400px;
  height: 400px;
  div {
    flex: 1;
  }
}

.center-layout {
  display: flex;
  width: 400px;
  height: 400px;
  background-color: #f66;
  div {
    margin: auto;
    width: 100px;
    height: 100px;
    background-color: #66f;
  }
}

</style>
