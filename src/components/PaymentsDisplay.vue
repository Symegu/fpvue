<template>
  <div class="paymentsList">
    <div class="paymentItem" v-for="(item, index) in items" :key="index">
        {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  props: {
    items: {
      type: Array,
      default: () => []
      // validator: function (value) {
      //   if (!Array.isArray(value)) {
      //     alert('Alarm')
      //   }
      // }
    }
  }
}
</script>
