<template>
  <div class="home">
    <header>
      <div :class="[$style.title]">My personal costs</div>
      <div>Total Price = {{ getFullPaymentValue }}</div>
    </header>
    <main>
      <PaymentsDisplay :items="currentElements"/>
      <AddPaymentForm @addNewPayment="addPaymentData"/>
      <br>
      <MyPagination :cur="cur" :length="getPaymentsList.length" :n="n" @changePage="changePage"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import { mapGetters, mapMutations } from 'vuex'
import MyPagination from '@/components/MyPagination.vue'

export default {
  name: 'HomeView',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    MyPagination
  },
  data () {
    return {
      cur: 1,
      n: 10
    }
  },
  methods: {
    fetchData (category, value) {
      this.category = category
      this.value = value
    },
    addPaymentData (data) {
      this.paymentsList.push(data)
    },
    ...mapMutations([
      'setPaymentsListData'
    ]),
    changePage (p) {
      this.cur = p
    }
  },
  async created () {
    await this.$store.dispatch('fetchData')
    // this.paymentsList = this.fetchData()
    // this.setPaymentsListData(this.fetchData())
    // this.$store.commit('setPaymentsListData', this.fetchData())
  },
  mounted () {
    if (!this.$route.params?.page || isNaN(this.$route.params.page)) return
    this.cur = Number(this.$route.params.page)
  },
  computed: {
    // classes () {
    // return 'someClass'
    // },
    currentElements () {
      return this.getPaymentsList.slice(this.n * (this.cur - 1), this.n * (this.cur - 1) + this.n)
    },
    // getFPV () {
    // return this.$store.getters.getFullPaymentValue
    // },
    ...mapGetters(['getFullPaymentValue', 'getPaymentsList'])
  }
}
</script>

<style lang="scss" module>
.title {
  font-size: 40px;
}
</style>
