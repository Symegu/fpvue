<template>
  <div class="btn">
    <!-- {{ $slots }} -->
    <div class="icon" style="display: flex;">
      <slot name="icon" v-bind="{count: countClick, action:action}"/>
    </div>
    <button @click="onClick">
      <slot>Click</slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "MyButtonSlots",
  data() {
    return {
      countClick: 0
    }
  },
  methods: {
    onClick() {
      this.countClick ++
      this.$emit("click");
    },
    action(){
      console.log('action')
    }
  },
};
</script>
<style lang="scss" scoped>
.btn {
  display: flex;
  width: 100%;
}

</style>
