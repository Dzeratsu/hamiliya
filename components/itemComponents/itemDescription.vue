<template>
  <div class="descript">
  <div class="bg-descr">
    <div class="text">3 организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа модели развития. Не следует, однако забывать, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание форм развития.</div>
  </div>
  </div>
</template>

<script>
export default {
  name: "itemDescription"
}
</script>

<style scoped>
.descript{
  padding-top: 120px;
}
.bg-descr {
  margin: 0 auto;
  height:260px;
  width:966px;
  background: rgba(132, 123, 178, 0.56);
  color: white;
}
.text {
  padding-top: 58px;
  margin: 0 auto;
  width: 636px;
  height: 145px;
  font-size: 20px;
  line-height: 29px;
}
@media screen and (max-width: 425px) {
  .descript{
    padding-top: 30px;
  }
  .bg-descr {
    margin: 0 auto;
    height:68px;
    width:197px;
    background: rgba(132, 123, 178, 0.56);
    color: white;
  }
  .text {
    padding-top: 14px;
    margin: 0 auto;
    width: 154px;
    height: 68px;
    font-size: 6px;
    line-height: 8px;
  }
}

</style>
