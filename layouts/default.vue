<template>
  <div class="wrapper">
   <HeaderLayout/>
  <Nuxt/>
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

</style>
