<template>
  <div class="footer">
    <input
      class="footer__addTodo"
      type="text"
      placeholder="Add a to-do"
      v-model="inputData"
      v-on:keydown.enter="addTodo(inputData), clear()"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Footer",
  data() {
    return {
      inputData: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    clear() {
      this.inputData = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/style/Mixins";

.footer {
  position: absolute;

  max-width: 1440px;
  padding: 20px;
  bottom: 0px;
  right: 0px;
  left: 0px;

  .footer__addTodo {
    background: #1f2632;
    border-radius: 5px;
    border: none;

    width: calc(100% - 13px);
    padding-left: 13px;
    padding-top: 9px;
    padding-bottom: 9px;

    @include typography("Poppins", 20px, 300);
    color: rgba(255, 255, 255, 0.75);
  }
}
</style>
