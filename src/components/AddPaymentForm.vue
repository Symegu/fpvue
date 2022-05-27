<template>
  <v-card class="pa-8">
    <v-card-title class="justify-center">{{ titleText }} расход</v-card-title>
    <v-text-field v-model="date" label="Дата"/>
    <v-text-field v-model="value" label="Стоимость"/>
    <v-select v-model="category" :items="categoryList" label="Категория"/>
    <v-btn color="teal" dark @click="onClickSave">{{ titleText }}</v-btn>
  </v-card>
</template>

<script>

export default {
  name: "AddPaymentForm",
  data() {
    return {
      editMode: false,
      date: '',
      category: '',
      value: '',
      id: ''
    }
  },
  props: {
    titleText: String,
    values: Object
  },
  methods: {
    onClickSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: +this.value,
        id: this.id || Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
      }
      if (this.editMode) {
        this.$store.commit('editDataToPaymentList', data)
        this.editMode = false
      } else {
        this.$store.commit('addDataToPaymentList', data);
      }
      this.date = '';
      this.category = '';
      this.value = '';
      this.$emit('closeMenu', false)
    }
  },
  async created() {
    await this.$store.dispatch('fetchCategoryList')
  },
  mounted() {
    if (this.values?.item) {
      const {category, date, value, id} = this.values.item
      this.value = value
      this.date = date
      this.category = category
      this.id = id
      this.editMode = true
      return;
    }
    const {category, section} = this.$route.params
    if (!category || !section) return
    this.category = category
    const {value} = this.$route.query
    if (!value) return
    this.value = value
    if (this.value && this.category) {
      this.onClickSave()
    }
  },
  computed: {
    getCurrentDate() {
      const today = new Date()
      const formatter = new Intl.DateTimeFormat('ru', {
        day: "numeric",
        month: "numeric",
        year: "numeric"
      })
      return formatter.format(today);
    },
    categoryList() {
      return this.$store.getters.getCategoryList
    }
  }
}
</script>

<style scoped lang="scss">

</style>