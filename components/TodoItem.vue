<template>
  <li class="todo">
    <div class="d-flex justify-content-between">
      <div
        class="border-1 radius-circle d-inline-block1 done-toggle"
        style="width: 25px;height: 25px"
        @click="toggleTodo(todo)"
      >
        <label class="text-success fs-1" for="toggle" v-show="!todo.done">
          >
        </label>
      </div>
      <input
        id="toggle"
        type="checkbox"
        class="d-none"
        :checked="todo.done"
      />
      <span v-text="todo.text" class="flex-grow-1 mx-3"/>
      <button class="destroy" @click="removeTodo(todo)">X</button>
    </div>
  </li>
</template>

<script>

export default {
  props: {
    todo: {
      type: Object,
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    toggleTodo(todo) {
      this.$store.dispatch('todo/toggleTodo', todo)
    },
    removeTodo(todo) {
      this.$store.dispatch('todo/removeTodo', todo)
    }
  }
}
</script>

<style lang="scss" scoped>
.todo {
  list-style: none;

  .done-toggle {
    transform: rotate(95deg);
  }
}

</style>
