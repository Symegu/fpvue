<template>
  <div class="hello">
    <br/>
    <input v-model.number.lazy="operand1" />
    <input v-model.number="operand2" />
    = {{ result }}
    <br/>
    = {{ resultFib }}
    <br />
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div class="error" v-show="error">
      {{ error }}
    </div>
    <div class="messages">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else>Получилось слишком большое число</template>
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
    </div>
    <hr />
    <br />
    <div class="item" v-for="(item, idx) in myColletion" :key="idx">
      {{ idx }}-{{ item }}
    </div>
    <div class="logs">
      <div class="log" v-for="(item, idx) in logs" :key="idx">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  data() {
    return {
      result: 0,
      resultFib: 0, 
      operand1: 0,
      operand2: 0,
      error: "",
      myColletion: [1, 2, 4, 5, 6, 7, 8, 9],
      operands: ["+", "-", "/", "*"],
      logs: {}
    };
  },
  computed: {
    fibb1(){
      return this.fib(this.operand1)
    },
    fibb2(){
      return this.fib(this.operand2)
    }
  },
  watch:{
    operand1: {
    handler: function(newValue, oldValue) {
      console.log(newValue, oldValue)
    },
    immediate: true
    }
  },
  methods: {
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
      }

      const key = Date.now()
      const value = `${this.operand1} ${operation} ${this.operand2} = ${this.result}`

      this.$set(this.logs, key, value)
    },
    add() {
      this.result = this.operand1 + this.operand2;
      // this.resultFib = this.fibb1 + this.fibb2
    },
    substract() {
      this.result = this.operand1 - this.operand2;
    },
    divide() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "Делить на 0 нельзя";
        return;
      }
      this.result = operand1 / operand2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    fib(n){
      return n <= 1 ? n : this.fib(n-1) + this.fib(n-2)
    }
  }
};
</script>
