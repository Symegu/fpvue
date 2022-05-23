<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ status }}
    <MyVideoPlayer />
    <Calc />
  </div>
</template>

<script>
import MyVideoPlayer from "@/components/MyVideoPlayer.vue"
import Calc from "@/components/Calc.vue";
export default {
    name: "AboutView",
    component: {},
    data() {
        return {
          status: 'stop'
        };
    },
    components: { MyVideoPlayer, Calc }
}
</script>