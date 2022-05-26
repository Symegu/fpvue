<template>
  <v-container>
    <v-row>
      <v-col :cols="4">#</v-col>
      <v-col :cols="3">Date</v-col>
      <v-col :cols="3">Category</v-col>
      <v-col :cols="2">Value</v-col>
    </v-row>
    <v-row v-for="(item, index) in items" :key="index">
      <v-col :cols="4" align-self="center" class="text-center">{{ item.id }}</v-col>
      <v-col :cols="3">{{ item.date }}</v-col>
      <v-col :cols="3">{{ item.category }}</v-col>
      <v-col :cols="2">{{ item.value }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    editItem(item) {
      this.$modal.show('addform', {
        title: "Add New Payment", component: 'AddPaymentForm', props: {
          item
        }
      })
      console.log('edit', item)
    },
    deleteItem(item) {
      console.log('deleteItem', item)
      //mutation delete
      this.$contextMenu.hide()
    },
    onContextMenuClick(event, item) {

      const items = [
        {
          text: "Edit", action: () => { this.editItem(item) }
        },
        {
          text: 'Delete item', action: () => { this.deleteItem(item.id) }
        }
      ]
      this.$contextMenu.show({ event, items })
    }
  },
}
</script>
<style lang="scss" scoped>
.cursor {
  cursor: pointer;
}
</style>