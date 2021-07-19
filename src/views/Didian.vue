<template>
  <div class="locate-icon-wrap">
    <div class="locate-icon"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Didian',
  components: {
  },
})
export default class extends Vue {
}
</script>

<style scoped lang="scss">
.locate-icon {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #06c;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
  &::after {
    content: '';
    margin-top: 45px;
    display: inline-block;
    border: 15px solid transparent;
    border-top-color: #06c;
  }
}
</style>
