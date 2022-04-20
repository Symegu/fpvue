<template>
  <div class="hello">
    {{ hz }}
    <br>
    <input v-model.number.lazy="operand1" >
    <input v-model.number.lazy="operand2" >
    = {{ result }}
    <br>
    = {{ resultFib }}
    <br>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div class="error" v-show="error">
      {{ error }}
    </div>
    <div class="messages">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else>Результат больше сотни</template>
    </div>
    <div class="keyboard">
        <button
        :title="operand"
        v-for="operand in operands"
        @click="calculate(operand)"
        :key="operand"
        >
        {{ operand }}
        </button>
        <button @click="result = Math.pow(operand1, operand2)">**</button>
    </div>
    <hr>
    <br>
    <div class="item" v-for="(item, index) in myCollection" :key="index">
      {{ index }} - {{ item }}
    </div>
    <div class="logs">
      <div class="log" v-for="(item, index) in logs" :key="index">
      {{ item }}
    </div>
    </div>
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
      resultFib: 0,
      operand1: 0,
      operand2: 0,
      textValue: '',
      textValue2: '',
      error: '',
      myCollection: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      operands: ['+', '-', '*', '/'],
      logs: {}
    }
  },
  computed: {
    fib1 () {
      return this.fib(this.operand1)
    },
    fib2 () {
      return this.fib(this.operand2)
    },
    hz () {
      return `${this.msg} result ${this.result}`
    }
  },
  watch: {
    result: {
      handler: function (newValue, oldValue) {
        console.log(newValue, oldValue)
      },
      immediate: true
    }
  },
  methods: {
    calculate (operation = '+') {
      this.error = ' '
      switch (operation) {
        case '+' :
          this.sum()
          break
        case '-' :
          this.subtract()
          break
        case '*' :
          this.multiply()
          break
        case '/' :
          this.divide()
          break
      }
      const key = Date.now()
      const value = `${this.operand1} ${operation} ${this.operand2} = ${this.result}`
      this.$set(this.logs, key, value)
    },
    onBlur () {
      console.log(this.textValue)
    },
    onFocus () {
      console.log('focus')
    },
    sum () {
      this.result = this.operand1 + this.operand2
      this.resultFib = this.fib1 + this.fib2
    },
    subtract () {
      this.result = this.operand1 - this.operand2
    },
    divide () {
      const { operand1, operand2 } = this
      if (!operand2) {
        this.error = 'Делить на 0 нельзя'
        return
      }
      this.result = operand1 / operand2
    },
    multiply () {
      this.result = this.operand1 * this.operand2
    },
    fib (n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2)
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
