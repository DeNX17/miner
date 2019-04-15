<template>
  <div>
    <div v-for="(FieldLine, idx) in GetFields" class="flex" :key="idx">
      <FieldItem v-for="(FieldItem, index) in FieldLine"
                 :value="FieldItem.value"
                 :title="FieldItem.title"
                 :key="index"
                 @pickField="pickItem(index, idx)"
                 @pickBomb="pickBomb({coordX: index, coordY: idx})"
                 :update="Update"
                  />
    </div>
  </div>
</template>

<script>
import FieldItem from './FieldItem.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
name: 'Fields',
data () {
  return {

  }
},
methods: {
  ...mapActions('logic', {
    RenderFields: 'RenderFields',
    PickField: 'PickField',
    pickBomb: 'pickBomb'
  }),
  pickItem (coordX, coordY) {
    this.PickField({ coordX, coordY })
  }
},
computed: {
  ...mapGetters('logic', {
    GetFields: 'GetFields',
    Update: 'Update'
  })
},
components: {
  FieldItem
}
}
</script>

<style>
.FieldItem {
display: inline-block;
border: 1.5px solid red;
padding: 0px;
content: '';
margin: 0px;
}

.flex {
display: flex;
}
</style>
