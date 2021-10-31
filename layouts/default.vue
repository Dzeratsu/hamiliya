<template>
  <div class="wrapper">
    <div class="container none"><burger/></div>
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
.none {
  display: none;
}

@media screen and (max-width: 425px) {
  .none {
    display: block;
    padding-left: 5px;
  }
}
</style>
