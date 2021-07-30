<template>
<div class="three-crossbar-wrap">
<div class="icon"></div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ThreeCrossbar',
  components: {},
})

export default class extends Vue {}

</script>

<style scoped lang="scss">
.three-crossbar-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
/*三道杠*/
.icon {
  box-sizing: border-box;
  display: inline-block;
  width: 12px;
  height: 10px;
  padding: 2px 0;
  border-top: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  background: currentColor; /*注意如果此处背景颜色属性用缩写的话，需要放到其他背景属性的前面，否则会覆盖前面的属性值（此处为background-clip）为默认值*/
  background-clip: content-box;
}
</style>
