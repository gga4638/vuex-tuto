<template>
  <div style="width: 700px;">
    <p class="fw-bolder fs-2 mt-0">
      {{ thread.name }}
    </p>
    <ul class="border-warning border p-2 overflow-auto" ref="messages">
      <ChatMessageItem
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </ul>
    <textarea name="" id="" cols="110" rows="3" @keyup.enter="sendMessage"></textarea>
    <div></div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      thread: 'chat/currentThread',
      messages: 'chat/sortedMessage'
    })
  },
  watch: {
    messages() {
      this.$nextTick(() => {
        let messages = this.$refs.messages;
        messages.scrollTo({ top: messages.scrollHeight, behavior: 'smooth'})
      })
    }
  },
  methods: {
    sendMessage(e) {
      this.$store.dispatch('chat/sendMessage', { text: e.target.value, thread: this.thread })
      e.target.value = ''
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 0px;
  height: 400px;
}
</style>

