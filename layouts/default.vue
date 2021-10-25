<template>
  <div class="wrapper">
   <HeaderLayout/>
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
export default {
  name: "default",
  components:{
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
