<template>
  <div class="about">
    <h1>This is an not found page</h1>
    {{ status }}
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  component: {},
  data () {
    return {
      status: 'stop'
    }
  }
}
</script>
