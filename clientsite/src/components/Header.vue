<template>
  <div class="header">
    <div class="header__gradient"><div class="header__darken"></div></div>
    <p class="header__weekday">{{ weekday }}</p>
    <p class="header__date">{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      weekday: "Sonntag",
      date: "19 April, 2020"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/style/Mixins";
.header {
  div {
    height: 254px;
  }
  background: url("https://i.imgur.com/uJ8mbVh.jpg") center / cover no-repeat;
  .header__gradient {
    background: linear-gradient(
      180deg,
      rgba(31, 38, 50, 0) 0%,
      rgba(22, 29, 41, 0.5) 51.56%,
      #161d29 100%
    );
    mix-blend-mode: normal;
  }

  .header__darken {
    background: #1f2632;
    mix-blend-mode: color;
  }

  .header__weekday {
    position: absolute;
    left: 20px;
    top: 137px;

    @include typography("Poppins", 46px, 300);
  }

  .header__date {
    position: absolute;
    left: 20px;
    top: 199px;

    @include typography("Poppins", 26px, 300);
    color: rgba(255, 255, 255, 0.75);
  }
}
</style>
