<template>
  <div class="yes-icon-wrap">
    <div class="yes-icon"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Yes',
  components: {
  },
})

export default class extends Vue {
}
</script>

<style scoped lang="scss">
// less
.yes-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: green;
  border-radius: 50%;
  &::after {
    content: '✓';
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
