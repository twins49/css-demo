<template>
  <div class="ps-icon-wrap">
    <div class="ps-icon"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Ps',
  components: {
  },
})
export default class extends Vue {
}
</script>

<style scoped lang="scss">
.ps-icon {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: rgb(15, 102, 184);
  &::before {
    position: absolute;
    content: '';
    display: inline-block;
    width: 50px;
    height: 40px;
    background-color: rgba(255, 255, 255, .1);
  }
  &::after {
    position: absolute;
    content: 'PS';
    font-size: 24px;
    display: inline-block;
    color: #fff;
  }
}

</style>
