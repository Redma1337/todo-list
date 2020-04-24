<template>
  <div class="home">
    <Layout>
      <Header slot="header" />
      <Body slot="body" />
      <Footer slot="footer" />
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Layout,
    Header,
    Body,
    Footer
  }
};
</script>

<style lang="scss">
body,
html {
  max-width: 1440px;
  height: 1024px;
  margin: 0;

  color: white;
  background: #161d29;

  p {
    margin: 0px;
  }
}
</style>
