<template>
<div class="container">
  <div class="wrap">
<div class="second-menu">
  <div><NuxtLink active-class="blur" to="/media/mantras" class="none">Мантры</NuxtLink>
    <NuxtLink  to="/media/mantras">Мантры</NuxtLink>
  </div>
    <span></span>
  <div><router-link active-class="blur" to="/media/mantrasVideo" class="none">Видео</router-link>
    <router-link  to="/media/mantrasVideo">Видео</router-link>
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
@media screen and (max-width: 425px) {
  .wrap {
    max-width: 271px;
    margin: 0 auto;
  }
  .second-menu{
    margin-top: 30px;
    height: 35px;
  }
  .second-menu span {
    width: 1px;
    height: 35px;
  }
  .second-menu a {
    font-size: 10px;
  }
  .blur {
    filter: blur(15px);
  }
}

</style>
