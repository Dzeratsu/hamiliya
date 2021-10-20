<template>
<div class="container">
<!--  <item-banner v-bind:mantraName="[mantraData.name, postrerURL]"/>-->
  <div class="description">Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа модели развития. Не следует, однако забывать, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание форм развития. </div>
  <item-vid/>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "pageVideo",
  data() {
    return{
      audios: [],
      postrerURL: '',
      mantraData: ''
    }
  },
  mounted() {
    axios.get(`http://apiblog.hamiliya.social/get_materials/${this.$route.params.mantrasVideo}`)
      .then((response) => this.mantraData = response.data.materials).then(()=> {
      for(let i = 0; i < this.mantraData.file.length; i++){
        if(this.mantraData.file[i].audio !== 0){
          this.audios.push(this.mantraData.file[i])
        }else if (this.mantraData.file[i].audio == 0 && this.mantraData.file[i].cover == 0 ){
          this.postrerURL = "http://apiblog.hamiliya.social/" + this.mantraData.file[i].url
        }
      }
    })
  }
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
