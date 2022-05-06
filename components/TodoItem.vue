<template>
<!--

  <li class="todo" :class="{ completed: todo.done, editing: editing }">

-->
  <li class="todo">
    <div class="d-flex justify-content-between">
      <div class="border-1 radius-circle d-inline-block1 done-toggle" style="width: 25px;height: 25px">
        <label class="text-success fs-1" for="toggle">
          >
        </label>
      </div>

      <input
        id="toggle"
        type="checkbox"
        class="d-none"
      />
<!--
        :checked="todo.done"
        @change="toggleTodo(todo)"
        -->

      <input
        class="flex-grow-1 mx-3"
      />
      <!--
            v-show="editing"
            v-focus="editing"
            :value="todo.text"
            @keyup.enter="doneEdit"
            @keyup.esc="cancelEdit"
            @blur="doneEdit"
            -->

      <button class="destroy" @click="removeTodo(todo)">X</button>
    </div>


  </li>
</template>

<style lang="scss" scoped>
.todo {
  list-style: none;

  .done-toggle {
    transform: rotate(95deg);
  }
}

</style>
