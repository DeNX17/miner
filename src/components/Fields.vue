<template>
  <div>
    <div v-for="(FieldLine, lineY) in GetFields" class="flex" :key="lineY">
      <FieldItem v-for="(FieldItem, lineX) in FieldLine"
                 :value="FieldItem.value"
                 :title="FieldItem.title"
                 :key="lineX"
                 @pickField="PickField({ coordX: lineX, coordY:lineY })"
                 @pickBomb="pickBomb({ coordX: lineX, coordY: lineY })"
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
  methods: {
    ...mapActions('logic', {
      RenderFields: 'RenderFields',
      PickField: 'PickField',
      pickBomb: 'pickBomb'
    })
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
border: 1.5px solid black;
padding: 0px;
content: '';
margin: 0px;
}

.flex {
display: flex;
}
</style>
