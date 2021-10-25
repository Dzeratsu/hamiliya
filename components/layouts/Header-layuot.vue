<template>
<div class="container">
  <auth/>
  <div><router-link to="/"><img src="/logo.png"></router-link></div>
  <div class="nav-menu">
    <div><NuxtLink to="/" active-class="border" exact-path><h2>Медиа</h2></NuxtLink></div>
    <div><NuxtLink to="/practiceAll" active-class="border"><h2>Практика</h2></NuxtLink></div>
    <div><NuxtLink to="/bookAll" active-class="border"><h2>Услуги</h2></NuxtLink></div>
    <div><NuxtLink to="/codes" active-class="border"><h2>Коды</h2></NuxtLink></div>
  </div>
</div>
</template>

<script>
import Auth from "./auth";
export default {
  name: "HeaderLayout",
  components: {Auth}
}
</script>

<style scoped>
.container div{
  text-align: center;
}
img {
  margin: 0 auto;
}
.nav-menu{
  padding-top: 50px;
  display: flex;
  justify-content: space-around;
}
h2{
  color: white;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  text-align: left;
}
.border {
  display: block;
  border-bottom: 1px solid white;
  padding-bottom: 2px;
}

@media screen and (max-width: 425px) {
img {
  height: 67px;
  width: 79px;
}
  h2{
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    color: white;
  }
  .nav-menu {
    padding-top: 20px;
  }
}

</style>
