<template>
  <div
    class="todo"
    v-on:mouseenter="over = true"
    v-on:mouseleave="over = false"
  >
    <div
      v-bind:class="[todo.done ? 'todo__done' : 'todo__not-done']"
      v-on:click="updateComplete(todo.id)"
    />

    <p v-bind:class="[todo.done ? 'todo__desc-done' : 'todo__desc']">
      {{ todo.description }}
    </p>

    <div v-if="over" v-on:click="deleteTodo(todo.id)" class="todo__delete" />
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  data() {
    return {
      over: false
    };
  },
  methods: {
    deleteTodo() {
      this.$emit("deleted", "index");
    },
    updateComplete(index) {
      this.$emit("completed", index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/style/Mixins";

.todo {
  display: flex;
  align-items: center;

  height: 74px;
  box-shadow: 0px 1px 0px #1f2632;

  .todo__desc {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-left: 10px;
    height: 30px;
    width: 100%;

    @include typography("Poppins", 20px, 300);
  }

  .todo__desc-done {
    @extend .todo__desc;
    text-decoration: line-through;
  }

  .todo__not-done {
    margin-left: 20px;
    min-width: 34px;
    min-height: 34px;

    border: thin solid white;
    border-radius: 50rem;
    box-sizing: border-box;
  }

  .todo__done {
    @extend .todo__not-done;
    background: #e76086 url("../assets/done.svg") center no-repeat;
    border: none;
  }

  .todo__delete {
    width: 30px;
    height: 25px;
    margin-right: 20px;
    background: url("../assets/delete.svg") center no-repeat;
  }
}
</style>
