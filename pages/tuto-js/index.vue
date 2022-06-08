<template>
  <div>
    <h1>자바스크립트</h1>
    <button @click="visible" class="mb-2">show</button><br/>
    <button @click="loop" class="mr-5">loop</button><span>{{ num }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    visible() {
      for (let i = 0; i < 3; i++) {
        console.log(i)
      }
    },
    loop() {
      do {
        this.num = prompt("100을 초과하는 숫자를 입력해주세요.");
      } while (this.num <= 100 && this.num);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
