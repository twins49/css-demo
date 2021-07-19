<template>
  <div class="view-icon-wrap">
    <div class="view-icon"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'View',
  components: {
  },
})

export default class extends Vue {
}
</script>

<style scoped lang="scss">
.view-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 36px;
  background-color: #06c;
  border-radius: 50%;
  &::after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
  }
}
</style>
