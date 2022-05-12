<template>
  <div class="mr-3" style="width: 250px;">
    <div class="d-inline-block" style="height: 31px;">
      <span v-show="unreadCount">
        Unread threads: {{ unreadCount}}
      </span>
    </div>
    <ul class="thread-list border-warning border">
      <ChatThreadItem
        v-for="thread in threads"
        :key="thread.id"
        :active="thread.id === currentThread.id"
        @switch-thread="switchThread"
      >
      </ChatThreadItem>

      <li class="border-warning border p-3">
        <div class="d-flex justify-content-between text-warning mb-2 fs-5">
          <span class="fw-bolder">Jin and Bill</span>
          <div>오전 10:10:46</div>
        </div>
        <div>Sounds good. Will they be serving dessert?</div>
      </li>
      <li class="border-warning border p-3">
        <div class="d-flex justify-content-between text-warning mb-2 fs-5">
          <span class="fw-bolder">Dave and Bill</span>
          <div>오전 10:40:06</div>
        </div>
        <div>Totally! Meet you at the hotel bar.</div>
      </li>
      <li class="border-warning border p-3">
        <div class="d-flex justify-content-between text-warning mb-2 fs-5">
          <span class="fw-bolder">Functional Heads</span>
          <div>오전 05:55:55</div>
        </div>
        <div>At ForwardJS? Yeah, of course. See you there!</div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

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
      console.log("실행")
      this.$store.dispatch('chat/switchThread')
    }
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
        background-color: #efefff;
        cursor: pointer;
      }

      &.active {
        background-color: #efefff;
        cursor: none;
      }
    }
  }
}
</style>

