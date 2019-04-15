<template>
  <div id="app" class="container">
    <ResultComponent v-if="GetStatusGame"/>
    <Fields v-else />
  </div>
</template>

<script>
import Fields from './components/Fields.vue'
import ResultComponent from './components/ResultComponent.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  created () {
    this.RenderFields()
  },
  methods: {
    ...mapActions('logic', {
      RenderFields: 'RenderFields'
    })
  },
  computed: {
    ...mapGetters('logic', {
      GetFields: 'GetFields',
      GetStatusGame: 'GetStatusGame'
    })
  },
  components: {
    Fields,
    ResultComponent
  }

}
</script>

<style>
  .container {
    max-width: 1025px;
    margin: 0 auto;
    padding: 0px 12px;
  }
</style>
