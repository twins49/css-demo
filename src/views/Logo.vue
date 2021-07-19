<template>
  <div class="logo-icon-wrap">
    <div class="logo-icon"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Logo',
  components: {
  },
})

export default class extends Vue {
}
</script>

<style scoped lang="scss">
.logo-icon {
  position: relative;
  display: inline-flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(212, 73, 17);
  &::after {
    position: absolute;
    content: '';
    left: 10px;
    top: 12px;
    display: inline-block;
    width: 20px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    transform: rotate(135deg);
  }
  &::before {
    position: absolute;
    content: '';
    right: 10px;
    top: 12px;
    display: inline-block;
    width: 20px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    transform: rotate(-135deg);
  }
}

</style>
