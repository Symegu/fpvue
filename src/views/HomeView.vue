<template>
  <div class="home">
    <header>
      <div :class="[$style.title]">My personal costs</div>
    </header>
    <main>
      <PaymentsDisplay :items="paymentsList"/>
      <AddPaymentForm @addNewPayment="addPaymentData"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
export default {
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data () {
    return {
      paymentsList: []
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
    }
  },
  created () {
    this.paymentsList = this.fetchData()
  },
  computed: {
    classes () {
      return 'someClass'
    }
  }
}
</script>

<style lang="scss" module>
.title {
  font-size: 40px;
}
</style>
