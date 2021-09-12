<template>
<div class="container-footer">
<div class="logo1"><img src="~/static/foot-logo1.png"></div>
<router-link to="/"><div class="logo2"><img src="~/static/foot-logo2.png"></div></router-link>
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
}
</style>
