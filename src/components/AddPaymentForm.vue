<template>
  <div class="form-wrapper">
      <button @click="show=!show">Add new cost +</button>
      <br>
      <select v-if="categoryList" v-model="category">
        <option v-for="(value, idx) in categoryList" :key="idx"> {{ value }}</option>
      </select>
      <input v-if="show" v-model="date" placeholder="date" />
      <input v-if="show" v-model.number="value" placeholder="value" />
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
    },
    categoryList () {
      return this.$store.getters.getCategoryList
    }
  },
  methods: {
    onClickSave () {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value
      }
      this.$store.commit('addDataToPaymentsList', data)
      // this.$emit('addNewPayment', data)
      // console.log(data)
    }
  },
  async created () {
    await this.$store.dispatch('fetchCategoryList')
  },
  mounted () {
    // if (this.categoryList.length) {
    // this.category = this.categoryList[0]
    // }
    const { category, section } = this.$route.params
    if (!category || !section) {
      return
    }
    this.category = category
    const { value } = this.$route.query
    if (!value) return
    this.value = value
    if (this.value && this.category) {
      setTimeout(this.onClickSave(), 3000)
    }
  }
}
</script>
