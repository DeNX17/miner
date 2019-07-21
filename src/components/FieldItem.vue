<template>
  <div :class="PrintTitle" @click="pickField" @contextmenu.prevent="pickBomb">
    <span>{{ title }}</span>
  </div>
</template>

<script>

export default {
  name: 'FieldItem',
  props: {
    value: String,
    title: String,
    update: Boolean
  },
  data () {
    return {
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
    PrintTitle () {
      let className = 'FieldItem '

      if (this.title === '0') {
        className += 'titleZero'
      } else if (this.title === 'X') {
        className += 'titleBomb'
      } else {
        className += 'titleNumber'
      }
      return className
    }
  }
}
</script>

<style>
  .FieldItem {
    height: 50px;
    width: 50px;
    /*display: inline-block;*/
    border: 1.5px solid black;
    padding: 5px 5px 5px 5px;
    margin: 0px;
    font-size:  20px;
    display: flex;
    justify-content: center;
    text-align: center;
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

  .titleZero {
    background-color: grey;
    content: '';
    color: white;
  }

  .titleZero span {
    font-size: 0;
  }

  .titleNumber {
    color: black;
    font-size: 30px;
  }

  .titleBomb {
    font-size: 40px;
    color: red;
  }
</style>
