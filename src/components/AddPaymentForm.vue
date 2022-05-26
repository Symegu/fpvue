<template>
  <v-card class="pa-8">
    <v-text-field v-model="date" label="Date" />
    <v-text-field v-model="value" label="Value"/>
    <v-select v-model="category" :items="categoryList"/>
    <v-btn color="teal" dark @click="onClickSave">Save</v-btn>
  </v-card>
</template>
<script>
export default {
  name: "AddPaymentForm",
  props: {
    values: Object
  },
  data() {
    return {
      date: "",
      category: "",
      value: ""
    }
  },
  computed: {
    getCurrentDate(){
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth()+1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    }
  },
  methods: {
    onClickSave(){
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value
      }
      this.$store.commit('addDataToPaymentsList', data)
      // console.log(data);
    }
  },
  async created() {
    await this.$store.dispatch('fetchCategoryList')
  },
  mounted() {
    if(this.values?.item) {
      
      const {category, date, value} = this.values.item
      this.value = value
      this.date = date
      this.category = category
      return 
    }
    const {category, section} = this.$route.params
    if(!category || !section) {
      return 
    }
    this.category = category
    const {value} = this.$route.query
    if(!value) return 
    this.value = value
    if(this.value && this.category) {
       this.onClickSave()
    }
  },
}
</script>
