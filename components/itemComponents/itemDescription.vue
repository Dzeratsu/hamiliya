<template>
  <div class="descript">
  <div class="bg-descr">
    <div class="text" v-html="text"></div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  name: "itemDescription"
}
</script>

<style scoped>
.descript{
  padding-top: 50px;
}
.bg-descr {
  margin: 0 auto;
  min-height:100px;
  width:966px;
  background: rgba(132, 123, 178, 0.56);
  color: white;
}
.text {
  padding: 58px;
  margin: 0 auto;
  width: 636px;
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
