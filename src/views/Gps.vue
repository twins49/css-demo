<template>
  <div class="gps-icon-wrap">
    <p>原理类似，主要思想是画两个三较形，用伪元素的三角形遮住主元素底部即可</p>
    <div class="gps-icon"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Gps',
  components: {
  },
})

export default class extends Vue {
}
</script>

<style scoped lang="scss">
.gps-icon {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-width: 30px 15px 30px 15px;
  border-color: transparent;
  border-style: solid;
  border-bottom-color: #06c;
  transform: translate(10px, -16px) rotate(32deg);
  &::after {
    position: absolute;
    bottom: -48px;
    content: '';
    display: inline-block;
    border-width: 10px 38px 30px 38px;
    border-color: transparent;
    border-style: solid;
    border-bottom-color: #fff;
  }
}

</style>
