<template>
  <div class="container">
      <item-banner v-bind:mantraName="[mantraData.name, postrerURL, 'Практика']"/>
    <div class="description" v-html="pageBlock[0].description" v-if="pageBlock"></div>
<!--  <img src="~/assets/practic.png">-->
  <item-description v-bind:text="pageBlock[1].description" v-if="pageBlock"/>
   <div class="description"v-html="pageBlock[2].description" v-if="pageBlock"> </div>
    <div class="video ">
     <video-player src="https://www.youtube.com/watch?v=uUm-6b2I4No&feature=youtu.be"/>
  <div className="container">
    <item-banner v-bind:mantraName="[mantraData.name, postrerURL, 'Практика']"/>
    <div className="description" v-html="pageBlock[0].description" v-if="pageBlock"></div>
    <!--  <img src="~/assets/practic.png">-->
    <item-description v-bind:text="pageBlock[1].description" v-if="pageBlock"/>
    <div className="description" v-html="pageBlock[2].description" v-if="pageBlock"></div>
    <div className="video ">
      <video-player src="https://www.youtube.com/watch?v=uUm-6b2I4No&feature=youtu.be"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VideoPlayer from 'nuxt-video-player';
require("nuxt-video-player/src/assets/css/main.css");
export default {
  name: "practiceItem",
  components: {VideoPlayer},
  data() {
    return{
    return {
      audios: [],
      postrerURL: '',
      mantraData: '',
      urlVideo: '',
      pageBlock: ''
    }
  },
  mounted() {
    axios.get(`http://apiblog.hamiliya.social/get_materials/${this.$route.params.practiceItem}`)
      .then((response) => this.mantraData = response.data.materials).then(()=> {
      this.pageBlock = JSON.parse(this.mantraData.page_blocks)
      this.urlVideo = JSON.parse(this.mantraData.url_video)
      for(let i = 0; i < this.mantraData.file.length; i++){
        if(this.mantraData.file[i].audio !== 0){
          this.audios.push(this.mantraData.file[i])
        }else if (this.mantraData.file[i].audio == 0 && this.mantraData.file[i].cover == 0 ){
      .then((response) => this.mantraData = response.data.materials).then(() => {
      this.pageBlock = JSON.parse(this.mantraData.page_blocks)
      this.urlVideo = JSON.parse(this.mantraData.url_video)
      for (let i = 0; i < this.mantraData.file.length; i++) {
        if (this.mantraData.file[i].audio !== 0) {
          this.audios.push(this.mantraData.file[i])
        } else if (this.mantraData.file[i].audio == 0 && this.mantraData.file[i].cover == 0) {
          this.postrerURL = "http://apiblog.hamiliya.social/" + this.mantraData.file[i].url
        }
      }
    })
  }
}
</script>

<style scoped>
.video {
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 1270px;
}
.description {
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
img {
  padding-top: 120px;
}
@media screen and (max-width: 425px) {
  .description{
  text-align: justify;
}

img {
  padding-top: 120px;
}

@media screen and (max-width: 425px) {
  .description {
    height: 50px;
    width: 241px;
    margin: 0 auto;
    padding-top: 30px;
    font-size: 7px;
    line-height: 10px;
  }
  img {
    margin: 0 auto;
    padding-top: 30px;
    width: 320px;
    height: 110px;
  }
}
</style>
