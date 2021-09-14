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
export default {
  name: "default",
  components:{
    HeaderLayout,
    FooterLayout
  }
}
</script>

<style scoped>
.content {
  min-height: 812px;
}
</style>
