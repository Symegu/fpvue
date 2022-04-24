<template>
  <div class="home">
    {{ text }}
    <br/>
    {{ arr }}
    <br>
    <MyName msg="Hello" :text="text" :arr="arr"/>
    <button @click="show=!show">Show/hide</button>
    <myButton v-if="show"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import myButton from '@/components/myButton.vue'

export default {
  name: 'HomeView',
  components: {
    MyName: HelloWorld,
    myButton
  },
  data () {
    return {
      text: 'some text',
      show: true,
      arr: ['1', '2', '3', '4', '5']
    }
  }
}
</script>

<style>
</style>
