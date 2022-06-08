<template>
  <div>
    <h2>Promise Chaining</h2>
    <button @click="getData">실행</button>
    <button @click="goFail">실패</button>
    <button @click="goFailCatch">실패Catch</button>
    <p class="fs-3">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
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
        this.message = result
        return result + 10;
      })
      .then((result) => {
        this.message = result
        return result + 20;
      })
      .then((result) => {
        this.message = result
        return result + 30;
      })
    },
    goFail() {
      return new Promise((resolve, reject) => {
        reject('failed')
      })
      .then(() => {
        this.message = '성공'
      }, (err) => {
        this.message = "error message: " + err
      })
    },
    goFailCatch() {
      return new Promise((resolve, reject) => {
        reject('failed catch')
      })
      .then()
      .catch((err) => {
        this.message = "failed catch: " + err
      })
    },
    asyncAwait() {

    }

  }
}

</script>

<style lang="scss" scoped>

</style>
