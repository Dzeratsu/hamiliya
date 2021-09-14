<template>
<div class="container">
  <item-banner/>
  <div class="description">Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа модели развития. Не следует, однако забывать, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание форм развития. </div>
  <item-vid/>
</div>
</template>

<script>
export default {
  name: "pageVideo"
}
</script>

<style scoped>
.description{
  height: 144px;
  width: 989px;
  margin: 0 auto;
  padding-top: 120px;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  color: white;
  text-align: justify ;
}
@media screen and (max-width: 425px) {
  .description{
    height: 50px;
    width: 241px;
    margin: 0 auto;
    padding-top: 30px;
    font-size: 7px;
    line-height: 10px;
  }
}
</style>
