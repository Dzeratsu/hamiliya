<template>
  <div>
<div class="container">
  <item-banner v-bind:mantraName="[mantraData.name, postrerURL, 'Мантра']"/>
  <div class="description" v-html="mantraData.description"></div>
  <item-audio v-for="item in audios" v-bind:aud="item"/>
  <div class="input-form" v-if="mantraData.questions == []">
    <div><input placeholder="Введите ваше имя" v-model="userName"></div>
    <div><input v-for="(quest, index) in mantraData.questions" :placeholder="quest.name" v-model="questData[index]" value=" "></div>
    <div><button @click="testForm">Отправить</button></div>
  </div>

</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  middleware: 'auth',
  name: "mantrasItem",
  data() {
    return{
      audios: [],
      postrerURL: '',
      mantraData: '',
      questData: [],
      check: false,
      userName: '',
      answers: []
    }
  },
  mounted() {
    this.auth = false
    axios.get(`https://api.hamiliya.space/get_materials/${this.$route.params.mantrasItem}`)
      .then((response) => this.mantraData = response.data.materials).then(()=> {
      for(let i = 0; i < this.mantraData.file.length; i++){
        if(this.mantraData.file[i].audio !== 0){
          this.audios.push(this.mantraData.file[i])
        }else if (this.mantraData.file[i].audio == 0 && this.mantraData.file[i].cover == 0 ){
          this.postrerURL = "https://api.hamiliya.space/" + this.mantraData.file[i].url
        }
      }
    })
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
    console.log(this.answers)
    let object = {
      'material_id': this.mantraData.id,
      'messages': `${this.userName}`,
      'answers': `[${this.answers}]`
    }
    axios.post(`https://api.hamiliya.space/applications`, object).then((res)=>{
      if(res.data.errors == "Token error"){
      alert('ошибка токена')}
      this.answers = []
    })
    }
  }
}
</script>

<style scoped>
.description{
  width: 989px;
  margin: 0 auto;
  padding-top: 120px;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  color: white;
  text-align: justify ;
  padding-bottom: 25px;
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
