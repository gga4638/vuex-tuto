<template>
  <div style="text-align: center;background-color: beige">
    <h1 class="display-1" style="color: brown">todos</h1>
    <div style="display: flex;justify-content: center">
      <div class="w-25">
        <div class="d-flex">
        </div>
        <input class="fs-1 p-2" placeholder="what needs to be done?" autofocus @keyup.enter="addTodo" />
        <ul class="p-2" style="background-color: white;">
          <TodoItem
            v-for="(todo, index) in filteredTodos"
            :key="index"
            :todo="todo"
            class="mb-2"
          />
        </ul>
        <div class="text-center d-flex align-items-baseline justify-content-between">
          <div>{{ remaining }} items left</div>
          <ul class="filters">
            <li v-for="(val, filter) in filters" :key="filter">
              <a
                :href="'#/' + filter"
                @click="visibility = filter"
              >
                {{ filter }}
              </a>
            </li>
          </ul>
          <button
            :class="{invisible: !(this.todos.length > remaining)}"
            @click="clearCompleted"
          >Clear completed</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import {STORAGE_KEY} from "@/store/todo";

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}

export default {
  auth       : false,
  data() {
    return {
      visibility: 'all',
      filters: filters,
      isActive: true,
      name: '',
      age: 0,
   }
  },
  computed: {
    ...mapState({
      todos: 'todo/todos'
    }),
    ...mapGetters({
    }),
    todos() {
      return this.$store.state.todo.todos
    },
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
    remaining() {
      return this.todos.filter(todo => !todo.done).length
    },

  },
  methods: {
    addTodo(e) {
      const text = e.target.value
      if(text.trim()) {
        this.$store.dispatch('todo/addTodo', text, {root:true})
      }
      e.target.value = ''
    },
    clearCompleted() {
      return this.$store.dispatch('todo/clearCompleted')
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

.clearCompleted {
  visibility: visible;
}


</style>
