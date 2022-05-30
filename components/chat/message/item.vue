<template>
  <li class="p-3">
    <div class="d-flex justify-content-between text-warning mb-2 fs-5">
      <span class="fw-bolder"> {{ message.authorName }}</span>
      <div>{{ message.timestamp | time }}</div>
    </div>
    <div>{{ message.text }}</div>
  </li>
</template>

<script>

export default {
  props:{
    message: Object,
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>

