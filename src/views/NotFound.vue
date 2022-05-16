<template>
  <div class="about">
    <h1>This is an not found page</h1>
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'Payment', category: 'Food'}, query: { value:200}}">Food 200</router-link>
    <br>
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'Payment', category: 'Transport'}, query: { value:50}}">Transport 50</router-link>
    <br>
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'Payment', category: 'Entertainment'}, query: { value:2000}}">Entertainment 2000</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
