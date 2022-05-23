<template>
  <div>
      <input v-model="value" />
      <button @click="onSave">Save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "TestVuexComponent",
    data(){
      return {
        value: ''
      }
    },
    methods: {
      ...mapActions([
        'addData'
      ]),
      onSave(){
        this.addData(this.value)
      }
    }
}
</script>

<style>
</style>