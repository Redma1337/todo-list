<template>
  <div class="body">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  name: "Body",
  components: {
    TodoList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
