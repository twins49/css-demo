<template>
 <div class="sticky-wrap">
   <div class="box">
     <dl>
       <dt>A</dt>
       <dd>Andrew W.K.</dd>
       <dd>Apparat</dd>
       <dd>Arcade Fire</dd>
       <dd>At The Drive-In</dd>
       <dd>Aziz Ansari</dd>
     </dl>
     <dl>
       <dt>C</dt>
       <dd>Chromeo</dd>
       <dd>Common</dd>
       <dd>Converge</dd>
       <dd>Crystal Castles</dd>
       <dd>Cursive</dd>
     </dl>
     <dl>
       <dt>E</dt>
       <dd>Explosions In The Sky</dd>
     </dl>
     <dl>
       <dt>T</dt>
       <dd>Ted Leo & The Pharmacists</dd>
       <dd>T-Pain</dd>
       <dd>Thrice</dd>
       <dd>TV On The Radio</dd>
       <dd>Two Gallants</dd>
       <dd>Two Gallants</dd>
       <dd>Two Gallants</dd>
       <dd>Two Gallants</dd>
       <dd>Two Gallants</dd>
       <dd>Two Gallants</dd>
       <dd>Two Gallants</dd>
     </dl>
   </div>
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
.sticky-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
div.box {
  height: 450px;
  overflow: auto;
}
dl {
  margin: 0;
  padding: 24px 0 0 0;
}
dt {
  position: sticky;
  top: 0;
  padding: 2px 0 0 12px;
  margin: 0;
  border-bottom: 1px solid #989EA4;
  border-top: 1px solid #717D85;
  background: #B8C1C8;
  color: #FFF;
  font: bold 18px/21px Helvetica, Arial, sans-serif;
}
dd {
  font: bold 20px/45px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}
dd + dd {
  border-top: 1px solid #CCC
}
</style>
