<template>
  <div class="container">
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
  * {
    user-select: none;
  }

  .container {
    max-width: 1025px;
    margin: 0 auto;
    padding: 0px 12px;
  }

  @font-face {
    font-family: 'Slabo';
    src: url("./assets/Slabo27px-Regular.ttf");
  }
</style>
