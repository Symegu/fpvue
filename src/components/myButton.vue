<template>
  <div>
    <button @click="onClick">clicked {{ counter }} times!</button>
  </div>
</template>
<script>
export default {
  name: 'myButton',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    onClick () {
      this.counter++
    },
    onMouseOver () {
      console.log('hovered')
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
    console.log(this)
  },
  mounted () {
    console.log('mounted')
    const btn = this.$el.querySelector('button')
    if (btn) {
      btn.addEventListener('mouseover', this.onMouseOver)
    }
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
    const btn = this.$el.querySelector('button')
    if (btn) {
      btn.removeEventListener('mouseover', this.onMouseOver)
    }
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>
