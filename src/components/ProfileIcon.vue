<script>
export default {
  name: 'profile-icon',
  props: {
    url: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  }
}
</script>

<template>
  <img
    :src="url"
    :width="size"
    :height="size"
    alt="Profile Image">
</template>

<style scoped>
img {
  display: block;
  border-radius: 50%;
}
</style>