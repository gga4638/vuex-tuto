<template>
  <section class="d-flex justify-content-center">
    <!-- Thread -->
    <ChatThreadSection/>
    <!-- Message -->
    <ChatMessageSection/>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lastMessageDate: null,
    }
  },
  created() {
    this.$store.dispatch('chat/getAllMessages')
  },
}
</script>

<style lang="scss" scoped>

</style>
