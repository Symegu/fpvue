<template>
  <div class="player">
    <button @click="onPlay">Play me</button>
    <button @click="onStop">Stop</button>
    <button @click="showControls">Show/hide controls</button>
    <video src="https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/video/sintel-short.mp4" ref="player" :controls="controls"/>
  </div>
</template>
<script>
export default {
  name: 'MyVideoPlayer',
  data () {
    return {
      controls: false
    }
  },
  methods: {
    showControls () {
      this.showControls = !this.showControls
    },
    onPlay () {
      this.$refs.player?.play()
    },
    onStop () {
      this.$refs.player?.pause()
    }
  },
  mounted () {
    console.dir(this.$refs.player)
  }
}
</script>
