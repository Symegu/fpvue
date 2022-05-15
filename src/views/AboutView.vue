<template>
  <div class='about'>
    <h1>This is an about page</h1>
    {{ status }}
    <MyVideoPlayer />
  </div>
</template>

<script>
import MyVideoPlayer from '@/components/MyVideoPlayer.vue'
export default {
  name: 'AboutView',
  component: {},
  data () {
    return {
      status: 'stop'
    }
  },
  components: { MyVideoPlayer }
}
</script>
