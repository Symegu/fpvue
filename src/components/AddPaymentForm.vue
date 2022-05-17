<template>
  <div class="form-wrapper">
    <button @click="show=!show">Add new cost +</button>
    <br>
    <input v-model="date"  placeholder="date"/>
    <select v-model="category" v-if="categoryList">
    <option v-for="(value, idx) in categoryList" :key="idx">{{value}}</option>
    </select>
    <input v-model.number="value" placeholder="value"/>
    <button @click="onClickSave">Save</button>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  props: {
    values: Object
  },
  data () {
    return {
      date: '',
      category: '',
      value: '',
      show: false
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
    if (this.values?.item) {
      const { category, date, value } = this.values.item
      this.value = value
      this.date = date
      this.category = category
      return
    }
    const { category, section } = this.$route.params
    if (!category || !section) {
      return
    }
    this.category = category
    const { value } = this.$route.query
    if (!value) return
    this.value = value
    if (this.value && this.category) {
      this.onClickSave()
    }
  }
}

</script>
