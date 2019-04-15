<template>
  <div>
    <p>Result: {{ GetStatusGame }}</p>
    <br>
    <button @click="RenderFields">Restart</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
name: 'ResultComponent',
data () {
  return {
  }
},
methods: {
  ...mapActions('logic', {
    RestartGame: 'RestartGame',
    RenderFields: 'RenderFields'
  })
},
computed: {
  ...mapGetters('logic', {
    GetStatusGame: 'GetStatusGame'
  })
}
}
</script>

<style>
  p {
    font-size: 45px;
    color: black;
  }
</style>
