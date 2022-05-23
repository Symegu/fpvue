<template>
  <div>The message is: {{ message }}</div>
</template>

<script>
export default {
    props: {
        message: String
    }
}
</script>