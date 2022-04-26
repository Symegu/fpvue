<template>
  <div class="form-wrapper">
      <button @click="show=!show">Add new cost +</button>
      <input v-if="show" v-model="date" placeholder="date" />
      <input v-if="show" v-model="category" placeholder="category" />
      <input v-if="show" v-model="value" placeholder="value" />
      <br>
      <button v-if="show" @click="onClickSave">Save</button>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  data () {
    return {
      date: '',
      category: '',
      value: '',
      show: true
    }
  },
  computed: {
    getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    onClickSave () {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value
      }
      this.$emit('addNewPayment', data)
      console.log(data)
    }
  }
}
</script>
