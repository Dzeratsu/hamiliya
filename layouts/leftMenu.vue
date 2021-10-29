<template>
  <div class="wrapper">
    <div class="container">
      <burger/>
    </div>
    <testHEader></testHEader>
    <div class="content">
      <Nuxt/>
    </div>
    <FooterLayout/>

  </div>
</template>

<script>
import HeaderLayout from '~/components/layouts/Header-layuot'
import FooterLayout from "~/components/layouts/FooterLayout";
import Auth from "../components/layouts/auth";
import TestHEader from "../components/layouts/testHEader";

export default {
  name: "leftMenu",
  components: {
    TestHEader,
    Auth,
    HeaderLayout,
    FooterLayout
  }
}
</script>

<style scoped>
.content {
  min-height: 606px;
}
</style>
