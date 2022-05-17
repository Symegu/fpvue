<template>
  <div class="wrapper">
    <div class="header">{{ settings.title }}</div>
    <div class="content">
        <AddPaymentForm v-if="settings.component === 'addform'"/>
        <AuthForm v-if="settings.component === 'auth'"/>
    </div>
    <div class="footer">
        <button @click="onCloseClick">Close</button>
    </div>
  </div>
</template>
<script>

import AddPaymentForm from './AddPaymentForm.vue'
import AuthForm from './AuthForm.vue'

export default {
  name: 'ModalWindowAddPaymentForm',
  props: {
    settings: Object
  },
  components: {
    AddPaymentForm,
    AuthForm
  },
  methods: {
    onCloseClick () {
      this.$modal.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 20px;
    position: absolute;
    top: 20%;
    left: 35%;
    background: #efefef;
  }
</style>
