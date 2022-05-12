<template>
  <section class="d-flex justify-content-center">
    <!-- Thread -->
    <ChatThreadSection></ChatThreadSection>
    <!-- Message -->
    <div>
      <p class="fw-bold fs-2 mt-0">
        Message title
      </p>
      <ul class="border-warning border p-2 overflow-auto">
        <li class="p-3">
          <div class="d-flex justify-content-between text-warning mb-2 fs-5">
            <span class="fw-bolder">Jin and Bill</span>
            <div>오전 10:10:46</div>
          </div>
          <div>Sounds good. Will they be serving dessert?</div>
        </li>
        <li class="p-3">
          <div class="d-flex justify-content-between text-warning mb-2 fs-5">
            <span class="fw-bolder">Dave and Bill</span>
            <div>오전 10:40:06</div>
          </div>
          <div>Totally! Meet you at the hotel bar.</div>
        </li>
        <li class="p-3">
          <div class="d-flex justify-content-between text-warning mb-2 fs-5">
            <span class="fw-bolder">Functional Heads</span>
            <div>오전 05:55:55</div>
          </div>
          <div>At ForwardJS? Yeah, of course. See you there!</div>
        </li>

      </ul>
      <textarea name="" id="" cols="60" rows="3" @keyup.enter="sendMessage"></textarea>
      <div></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lastMessageDate: null,

    }
  },
  methods: {
    sendMessage(e) {
      console.log("메세지 보냄: ", e.target.value)
      e.target.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 0px;
  height: 400px;
}
</style>
