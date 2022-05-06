<template>
  <div style="text-align: center;background-color: beige">
    <h1 class="display-1" style="color: brown">todos</h1>
    <div style="display: flex;justify-content: center">
      <div class="w-25">
        <div class="d-flex">

        </div>
        <input class="fs-1 p-2" placeholder="what needs to be done?" autofocus @keyup.enter="addTodo" />
        <ul class="p-2" style="background-color: white;">
          <TodoItem/>
        </ul>
        <div class="text-center d-flex align-items-baseline">
          <span style="margin-right: 50px;text-align: left">5 items left</span>
          <ul class="filters">
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

   }
  },
  computed: {

  },
  methods: {
    addTodo(e) {
      const text = e.target.value
      if(text.trim()) {
        this.$store.dispatch('todo/addTodo', text, {root:true})
      }
      e.target.value = ''
    }
  },
}
</script>

<style lang="scss" scoped>
/* todo: @extend 쓰면 에러나는데 해결방법을 못 찾겠음 */
.filters {
  list-style: none;
  display: flex;

  li {
    margin-right: 10px;
  }
}


</style>
