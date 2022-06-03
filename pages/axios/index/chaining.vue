<template>
  <div>
    <h2>Promise Chaining</h2>
    <button @click="getData">실행</button>
    <button @click="goFail">실패</button>
    <button @click="goFailCatch">실패Catch</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    getData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(1)
        }, 2000)
      })
      .then((result) => {
        console.log(result)
        return result + 10;
      })
      .then((result) => {
        console.log(result)
        return result + 20;
      })
      .then((result) => {
        console.log(result)
        return result + 30;
      })
    },
    goFail() {
      return new Promise((resolve, reject) => {
        reject('failed')
      })
      .then(() => {
        console.log('성공')
      }, (err) => {
        console.log("error message: ", err)
      })
    },
    goFailCatch() {
      return new Promise((resolve, reject) => {
        reject('failed catch')
      })
      .then()
      .catch((err) => {
        console.log("failed catch: ", err)
      })
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
