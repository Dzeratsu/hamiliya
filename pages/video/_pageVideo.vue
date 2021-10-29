<template>
<div class="container">

  <item-banner v-bind:mantraName="[mantraData.name, postrerURL, 'Видео']"/>
  <div class="description" v-html="mantraData.description"></div>
  <div class="video ">
    <video-player :src="urlVideo[0]"/>
  </div>
  <div class="input-form" v-if="checkQuest">
    <div><input placeholder="Введите ваше имя" v-model="userName"></div>
    <div><input v-for="(quest, index) in mantraData.questions" :placeholder="quest.name" v-model="questData[index]" value=" "></div>
    <div><button @click="testForm">Отправить</button></div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import VideoPlayer from 'nuxt-video-player';
require("nuxt-video-player/src/assets/css/main.css");
export default {
  name: "pageVideo",
  components: {VideoPlayer},
  data() {
    return{
      audios: [],
      postrerURL: '',
      mantraData: '',
      urlVideo: '',
      questData: [],
      check: false,
      userName: '',
      answers: []
    }
  },
  methods: {
    testForm(){
      if(this.userName == '' || this.questData.length < this.mantraData.questions.length){
        alert("Заполните все поля")
      }else{
        this.sumbitQustion()
      }
    },
    sumbitQustion(){
      for(let i = 0; i <this.mantraData.questions.length; i++){
        this.answers.push({id: this.mantraData.questions[i].id, text: this.questData[i]})
      }
      let object = {
        'material_id': `${this.$route.params.mantrasItem}`,
        'messages': `${this.userName}`,
        'answers': `${this.answers}`
      }
      axios.post(`https://api.hamiliya.space/applications`, object,{headers: {Authorization: `Bearer token`}}).then((res)=>{
        if(res.data.errors == "Token error"){
          alert('ошибка токена')}
        this.answers = []
      })
    }
  },
  mounted() {
    axios.get(`https://api.hamiliya.space/get_materials/${this.$route.params.pageVideo}`)
      .then((response) => this.mantraData = response.data.materials).then(()=> {
      if (this.mantraData.questions.length > 0) {
        this.checkQuest = true
      }
        this.urlVideo = JSON.parse(this.mantraData.url_video)
      console.log(this.urlVideo)
      console.log(typeof(this.urlVideo))
      for(let i = 0; i < this.mantraData.file.length; i++){
        if(this.mantraData.file[i].audio !== 0){
          this.audios.push(this.mantraData.file[i])
        }else if (this.mantraData.file[i].audio == 0 && this.mantraData.file[i].cover == 0 ){
          this.postrerURL = "https://api.hamiliya.space/" + this.mantraData.file[i].url
        }
      }
    })
  }
}
</script>

<style scoped>
.video{
  margin: 0 auto;
  text-align: center;
  padding-bottom: 50px;
  max-width: 1270px;
}

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
.input-form {
  text-align: center;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  text-align:  center;
  font-family: jost, Arial, sans-serif;
}
input{
  border: none;
  width: 990px;
  height: 90px;
  margin-bottom: 20px;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  padding-left: 20px;
}
button{
  margin-top: 30px;
  width: 361px;
  height: 76px;
  background: #FFFFFF;
  border-radius: 50px;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  color: #847BB2;
  margin-bottom: 120px;
  border: none;
}
input::-webkit-input-placeholder { color: #B5B5B5; padding-left: 42px}
input::-ms-input-placeholder { color: #B5B5B5; padding-left: 42px}
input::-ms-input-placeholder { color: #B5B5B5; padding-left: 42px}
input::placeholder { color: #B5B5B5; padding-left: 42px}
@media screen and (max-width: 425px) {
  .description{
    height: 50px;
    width: 241px;
    margin: 0 auto;
    padding-top: 30px;
    font-size: 7px;
    line-height: 10px;
  }
  .input-form {
    padding-top: 20px;
  }
  input{
    width: 270px;
    height: 30px;
    margin-bottom: 5px;
    font-size: 10px;
    line-height: 14px;
  }
  input::-webkit-input-placeholder { color: #B5B5B5; padding-left: 10px}
  input::-ms-input-placeholder { color: #B5B5B5; padding-left: 10px}
  input::-ms-input-placeholder { color: #B5B5B5; padding-left: 10px}
  input::placeholder { color: #B5B5B5; padding-left: 10px}
  button{
    margin-top: 20px;
    width: 130px;
    height: 30px;
    background: #847BB2;
    border-radius: 500px;
    font-size: 10px;
    font-style: normal;
    line-height: 14px;
    color: white;
    margin-bottom: 30px;
  }
}
</style>
