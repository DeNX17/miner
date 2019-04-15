<template>
  <div class="FieldItem" @click="pickField" @contextmenu.prevent="pickBomb">
    <span>{{ title }}</span>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name: 'FieldItem',
  props: {
    value: String,
    title: String,
    update: Boolean
  },
  data () {
    return {
      valueField: ''
    }
  },
  created () {
    if (this.value === 'mine') {
      this.valueField = 'mine'
    }
  },
  methods: {
    pickField () {
      this.$emit('pickField')
    },
    pickBomb () {
      this.$emit('pickBomb')
    }
  },
  computed: {
  }
}
</script>

<style>
  .FieldItem {
    height: 50px;
    width: 50px;
    /*display: inline-block;*/
    border: 1.5px solid red;
    padding: 5px 5px 5px 5px;
    margin: 0px;
    font-size:  20px;
    display: flex;
    justify-content: center;
    text-align: center;

  }

  span {
  }

  input {
    margin: 0px;
    padding: 0px;
    width: 50px;
    height: 50px;
    font-size: 30px;
    text-align: center;
    outline: none;
    border: none;
  }
</style>
