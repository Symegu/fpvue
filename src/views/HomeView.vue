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
      <MyPagination :cur="cur" :length="12" :n="n" @changePage="changePage"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import { mapGetters, mapMutations } from 'vuex'
import MyPagination from '@/components/MyPagination.vue'

export default {
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    MyPagination
  },
  data () {
    return {
      cur: 1,
      n: 3
    }
  },
  methods: {
    fetchData () {
      return [
        {
          date: '20.20.20',
          category: 'Food',
          value: 123
        },
        {
          date: '21.21.21',
          category: 'Transport',
          value: 456
        },
        {
          date: '22.22.22',
          category: 'Food',
          value: 789
        }
      ]
    },
    addPaymentData (data) {
      this.paymentsList.push(data)
    },
    ...mapMutations([
      'setPaymentsListData'
    ]),
    changePage (p) {
      this.cur = p
      this.$store.dispatch('fetchData', p)
    }
  },
  async created () {
    await this.$store.dispatch('fetchData', this.cur)
    // this.paymentsList = this.fetchData()
    // this.setPaymentsListData(this.fetchData())
    // this.$store.commit('setPaymentsListData', this.fetchData())
    console.log(this.$store.state)
  },
  computed: {
    classes () {
      return 'someClass'
    },
    currentElements () {
      return this.getPaymentsList.slice(this.n * (this.cur - 1), this.n * (this.cur - 1) + this.n)
    },
    getFPV () {
      return this.$store.getters.getFullPaymentValue
    },
    ...mapGetters(['getFullPaymentValue', 'getPaymentsList'])
  }
}
</script>

<style lang="scss" module>
.title {
  font-size: 40px;
}
</style>
