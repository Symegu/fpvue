<template>
  <div class="paymentsList">
    <div class="paymentItem" v-for="(item, index) in items" :key="index">
        <span>{{ item }}</span><span class="cursor" @click="onContextMenuClick($event,item)">//-//</span>
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
    }
  },
  methods: {
    editItem (item) {
      this.$modal.show('addform', { title: 'Add New Payment', component: 'AddPaymentForm', props: { item } })
      console.log('edit', item)
    },
    deleteItem (item) {
      console.log('delete', item)
      // mutation delete
      this.$contextMenu.hide()
    },
    onContextMenuClick (event, item) {
      const items = [
        {
          text: 'Edit', action: () => { this.editItem(item) }
        },
        {
          text: 'Delete Item', action: () => { this.deleteItem(item.id) }
        }
      ]
      this.$contextMenu.show({ event, items })
    }
  }
}
</script>
<style lang="scss" scoped>
.cursor {
  cursor: pointer;
}
</style>
