<template>
<div class="container">
  <div class="wrap">
<div class="second-menu">
  <div><NuxtLink active-class="blur" to="/services/book" class="none">Книги</NuxtLink>
    <NuxtLink  to="/services/book">Книги</NuxtLink>
  </div>
    <span></span>
  <div><router-link active-class="blur" to="/services/vibrations" class="none">Расчет вибраций</router-link>
    <router-link  to="/services/vibrations">Расчет вибраций</router-link>
  </div>
</div>
  </div>
</div>
</template>

<script>
export default {
  name: "secondMenu"
}
</script>

<style scoped>
.wrap {
  max-width: 1273px;
  margin: 0 auto;
}
.second-menu{
  margin-top: 90px;
  display: flex;
  height: 129px;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: -webkit-center;
  background: #847BB2;
}
.second-menu div{
  max-width: 635px;
  width: 100%;
}
.second-menu span {
  display: block;
  background-color: white;
  width: 3px;
  height: 129px;
}
.second-menu a {
  font-family: Jost;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0em;
  color: white;
}
.blur {
  visibility: visible !important;
  position: absolute;
  background: #C2B9F3;
  filter: blur(40px);
}
.none {
  visibility: hidden;
  position: absolute;
}
</style>
