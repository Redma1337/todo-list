<template>
  <div class="todo-list">
    <Todo
      v-for="(item, index) in openTodos"
      :key="index"
      :todo="item"
      @deleted="deleteTodo({ index: index, id: item.id })"
      @completed="toggleTodo({ index: index, id: item.id })"
    />
  </div>
</template>

<script>
import Todo from "@/components/Todo";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "TodoList",
  components: {
    Todo
  },
  mounted() {
    this.fetchTodos(); //get db data
  },
  computed: {
    ...mapGetters(["openTodos"])
  },
  methods: {
    ...mapActions(["deleteTodo", "toggleTodo", "fetchTodos"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
