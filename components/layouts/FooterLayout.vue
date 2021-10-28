<template>
<div class="container-footer">
<div class="logo1"><img src="~/static/foot-logo1.png"></div>
<NuxtLink to="/"><div class="logo2"><img src="~/static/foot-logo2.png"></div></NuxtLink>
<!--  <div class="icon-wrap">
  <NuxtLink to="#"><img src="~/assets/instagram_bw.png" class="icon"> </NuxtLink>
  <NuxtLink to="#"><img src="~/assets/fb.png" class="icon"> </NuxtLink>
  <NuxtLink to="#"><img src="~/assets/Whatsup_bw.png" class="icon"> </NuxtLink>
  <NuxtLink to="#"><img src="~/assets/Telegram_bw.png" class="icon"> </NuxtLink>
  </div>-->
</div>
</template>

<script>
export default {
  name: "FooterLayout"
}
</script>

<style scoped>
.container-footer{
  min-height: 330px;
  background-color: #525252;
  text-align: center;
}
.logo1 {
  padding-top: 51px;
}
.logo2{
  padding-top: 23px;
  padding-bottom: 23px;
}
.icon {
  padding: 8px;
}
.icon-wrap{
  padding-top: 12px;
}
@media screen and (max-width: 425px) {
  .container-footer{
    width: 100%;
    min-height: 330px;
    background-color: #525252;
    text-align: center;
  }
  .logo1 {
    padding-top: 14px;
  }
  .logo2{
    padding-top: 5px;
    padding-bottom: 5px;
  }
.logo1 img{
  width:31px;
  Height:28px;
}
  .logo2 img{
    width:31px;
    Height:4px;
  }
}
.container-footer{
  min-height: 72px;
  background-color: #525252;
  text-align: center;
}
.icon {
  width: 4px;
  height: 3px;
  padding: 1px;
}
.icon-wrap{
  padding-top: 0px;
}
</style>
