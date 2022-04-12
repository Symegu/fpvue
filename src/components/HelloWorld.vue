<template>
  <div class="hello">
    <h1>{{ msg }} - {{ msg.length }}</h1>
    <hr/>
    <input v-model.trim="textValue" @focus="onFocus" type="text">
    <input :value="textValue2" @input="textValue2 = $event.target.value">
    <button v-on:click="result = 1 + 9"> Click </button>
    <button @click="result = 1 + 4"> Click 2 </button>
    <hr>
    <input v-model.number.lazy="operand1" >
    <input v-model.number.lazy="operand2" >
    = {{ result }}
    <button @click="sum">+</button>
    <button @click="result = operand1 - operand2">-</button>
    <button @click="sub">:</button>
    <button @click="multiply">*</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  text: {
    type: String
  },
  data () {
    return {
      result: 0,
      operand1: 0,
      operand2: 0,
      textValue: '',
      textValue2: ''
    }
  },
  methods: {
    onBlur () {
      console.log(this.textValue)
    },
    onFocus () {
      console.log('focus')
    },
    sum () {
      this.result = this.operand1 + this.operand2
    },
    sub () {
      const { operand1, operand2 } = this
      this.result = operand1 / operand2
    },
    multiply () {
      this.result = this.operand1 * this.operand2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
