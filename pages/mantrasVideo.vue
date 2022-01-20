<template>
<div>
  <second-menu/>
  <catalog v-bind:id="[12, 'video']"/>
  <div class="text">
    <h1>Остальные видео вы можете посмотреть на ютуб канале</h1>
    <button><a href="https://www.youtube.com/channel/UCtlRWTmLvVNALykJrWNL8Cw" target="blank">Смотреть</a></button>
  </div>
  </div>
</template>

<script>
export default {
  name: "mantrasVideo"
}
</script>

<style scoped>
.text{
  padding-top: 25px;
  text-align: center;
  margin: 0 auto;
}
h1{
  font-size: 31px;
  text-align: center;
  color: black;
}
button{
  height: 74px;
  width: 280px;
  left: 559px;
  top: 781px;
  border-radius: 500px;
  border: 0px;
  background-color: #847BB2;
  color: white;
  font-family: Jost;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 25px;
  margin-top: 25px;
}
</style>
