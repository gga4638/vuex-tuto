<template>
  <div>
    <h2>API GET</h2>
    <button @click="addUser(newUser)">회원 추가</button>
    <div
      v-for="user in users"
      :key="user.id"
      class="mb-3 border-bottom-1"
    >
      <p>id : {{ user.id }}</p>
      <p>name : {{ user.name }}</p>
      <p>username : {{ user.username }}</p>
      <p>email : {{ user.email }}</p>
      <p>address : {{ user.address }}</p>
      <p>phone : {{ user.phone }}</p>
      <p>website : {{ user.website }}</p>
      <p>company : {{ user.company }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      newUser: {
        "id": 11,
        "name": "추가된 유저",
        "username": "뉴비",
        "email": "do@total.com",
        "address": {
          "street": "첨단",
          "suite": "와이어스파크",
          "city": "광주",
          "zipcode": "23-44",
          "geo": {
            "lat": "0000",
            "lng": "1001"
          }
        },
        "phone": "010-777-7843",
        "website": "biz4in.org",
        "company": {
          "name": "knet",
          "catchPhrase": "내일 나오면 3일 쉼",
          "bs": "퇴근까지 2기간"
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      getUsers: 'user/getUsers'
    }),
    users() {
      if(this.getUsers.length === 0) {
        this.$store.dispatch('user/initUser')
      }
      return this.getUsers
    }
  },
  methods: {
    addUser(user) {
      this.$store.dispatch('user/addUser', user)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

