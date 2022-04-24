<template>
  <div class="home">
    {{ text }}
    <br/>
    {{ arr }}
    <br>
    <myButton />
    <myButton />
    <myButton />
    <MyName msg="Hello" :text="text" :arr="arr"/>
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
      arr: ['1', '2', '3', '4', '5']
    }
  }
}
</script>

<style>
</style>
