<template>
  <div class="mr-3">
    <div class="d-inline-block m-0" style="height: 40px;">
      <span v-show="unreadCount">
        Unread threads: {{ unreadCount}}
      </span>
    </div>
    <ul class="thread-list border-warning border m-0">
      <ChatThreadItem
        v-for="thread in threads"
        :key="thread.id"
        :thread="thread"
        :active="thread.id === currentThread.id"
        @switch-thread="switchThread"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      threads: 'chat/threads',
      currentThread: 'chat/currentThread',
      unreadCount: 'chat/unreadCount'
    }),
  },
  methods: {
    switchThread(threadID) {
      this.$store.dispatch('chat/switchThread', threadID)
    },
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 0px;
  height: 400px;

  li {
    border-collapse: collapse;
    margin: -1px -1px 0px -1px;
  }

  &.thread-list {
    li {
      &:hover {
        background-color: #f8f8ff;
        cursor: pointer;
      }

      &.active {
        background-color: #efefff;
        cursor: default;
      }
    }
  }
}
</style>

