<template>
  <div class="about">
    <h1>This is an NotFound page</h1>
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Food'}, query: {value: 500}}">Sport 500</router-link>

      <button @click="openModalAuthForm">Show</button>
  </div>
</template>

<script>
export default {
    name: "NotFound",
    methods: {
      openModalAuthForm(){
        this.$modal.show('auth', {title: 'Auth From', component: 'auth'})
      }
    },
}
</script>