<template>
  <div class="ml-5">
    <div>
      <h1>input 한글</h1>
      <p>한글은 "v-model"이 업데이트 되지 않으므로 대신 input 이벤트를 사용해야함</p>
      <div class="mb-3">
        <span>v-model: </span>
        <input v-model="inputText" />
        <span>{{ inputText }}</span>
      </div>
      <div>
        <span>@input: </span>
        <input @input="inputMethod" />
        <span>{{ inputValue }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      inputValue: '',
    }
  },
  computed: {
  },
  methods: {
    inputMethod(e) {
      this.inputValue = e.target.value
    },
  }
}

</script>

<style lang="scss" scoped>

</style>

