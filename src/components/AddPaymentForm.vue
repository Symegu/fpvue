<template>
  <div class="form-wrapper">
      <input v-model="date" placeholder="date" />
      <input v-model="category" placeholder="category" />
      <input v-model="value" placeholder="value" />
      <br>
      <button @click="onClickSave">Save</button>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  data () {
    return {
      date: '',
      category: '',
      value: ''
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
