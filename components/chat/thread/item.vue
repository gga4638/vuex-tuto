<template>
  <li
    class="border-warning border p-3"
    :class="{ active: active }"
    @click="$emit('switch-thread', thread.id)"
  >
    <div class="d-flex justify-content-between text-warning mb-2 fs-5">
      <span class="fw-bolder">{{ thread.name || "name" }}</span>
      <div>{{ thread.lastMessage.timestamp | time}}</div>
    </div>
    <div>{{ thread.lastMessage.text || "text"}}</div>
  </li>

</template>

<script>
export default {
  name: 'Thread',
  props: {
    thread: Object,
    active: Boolean
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>

</style>

