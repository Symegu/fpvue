<template>
    <button @click="onClick">
        <slot>Click</slot>
    </button>
</template>
<script>
export default {
  name: 'myButton',
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
