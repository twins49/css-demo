<template>
<div class="wrap">
  <h3>CSS padding-top</h3>
  <div class="container" data-aspect="padding-top">
    <div class="box">

    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AspectRatio',
  components: {
  },
})
export default class extends Vue {
}
</script>

<style scoped lang="scss">
.container {
  border: 1px dashed #f36;
  border-radius: 1px;
  width: calc((100%/4) - 12px);
  position: relative;
  //aspect-ratio: 16 / 9;
  overflow: hidden;
  resize: horizontal;
}
.container[data-aspect="padding-top"] .box {
  height: 0;
  padding-top: 56.25%;
  width: 100%;
  position: relative;
}

.container[data-aspect="padding-top"] img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
