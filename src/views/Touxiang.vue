<template>
  <div class="touxiang-wrap">
    <span class="dot-pan"></span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Touxiang',
  components: {
  },
})
export default class extends Vue {
}
</script>

<style scoped lang="scss">
.dot-pan {
  position: relative;
  display: inline-flex;
  width: 60px;
  height: 60px;
  line-height: 0;
  align-items: center;
  border-radius: 50%;
  background-color: #06c;
  transform: rotate(-90deg);
  &::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 40px;
    margin-left: -3px;
    border-radius: 50% 50%;
    flex-shrink: 0;
    background-color: #fff;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: #fff;
  }
}

</style>
