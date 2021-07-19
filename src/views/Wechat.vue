<template>
  <div class="wechat-icon-wrap">
    <div class="wechat-icon"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Didian',
  components: {
  },
})
export default class extends Vue {
}
</script>

<style scoped lang="scss">
// less
.wechat-icon {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(68, 170, 59);
  &::before {
    content: '';
    margin-top: 14px;
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 16px 0 0 #fff;
  }
  &::after {
    content: '';
    margin-top: 42px;
    display: inline-block;
    border-width: 6px 10px 6px 10px;
    border-style: solid;
    border-color: transparent;
    border-top-color: rgb(68, 170, 59);
    transform: rotate(-147deg);
  }
}
</style>
