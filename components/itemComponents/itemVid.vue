<template>
  <div class="container">
    <div class="wpar">
      <div class="fon"><img src="~/assets/play.png"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemVid"
}
</script>

<style scoped>
.wpar{
  padding-top: 120px;
  padding-bottom: 120px;
}
.fon {
  margin: 0 auto;
  text-align: center;
  background: url("~/assets/bg-video.png") no-repeat;
  width: 1270px;
  height: 617px;
  background-size: cover;
}
img {
  padding-top: 239px;
}
@media screen and (max-width: 425px) {
.wpar{
  padding-top: 30px;
  padding-bottom: 30px;
}
.fon {
  margin: 0 auto;
  text-align: center;
  background: url("~/assets/bg-video.png") no-repeat;
  width: 257px;
  height: 125px;
  background-size: cover;
}
img {
  padding-top: 48px;
  width: 28px;
  height: 28px;
}
}
</style>
