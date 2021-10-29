<template>
<div class="container">
  <div class="code-form">
    <div class="input-form">
      <div><input placeholder="Имя Отчество Фамилия" type="text" v-model="iof" @keypress="test()"></div>
      <div><button @click="code()">Получить код</button></div>
    </div>
    <div class="code-user">
      <div class="code-item"><p>Ваш код: <span v-if="result">{{result}}</span></p></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "codes",
  layout: 'leftMenu',
  data () {
    return {
      iof: '',
      result: ''
    }
  },
  methods:{
    test(){
      this.iof = this.iof.replace(/[^А-я ]/g, '')
    },
    code(){
      this.test()
     let alfavit = {
        а: 1, б: 2, в: 3, г: 4, д: 5, е: 6, ё: 7, ж: 8, з: 9,
          и: 1, й: 2, к: 3, л: 4, м: 5, н: 6, о: 7, п: 8, р: 9,
          с: 1, т: 2, у: 3, ф: 4, х: 5, ц: 6, ч: 7, ш: 8, щ: 9,
          ъ: 1, ы: 2, ь: 3, э: 4, ю: 5, я: 6
      }
      let number = []
      var Summ = []
      var firstSumm = []
      let arr = this.iof.toLowerCase().split(' ').join('').split('')
      for(let i = 0; i < arr.length; i++){
        number.push(alfavit[arr[i]])
      }
      if(number.length % 2 == 0){
        for(let j = 0; j < number.length; j=j+2){
          Summ.push(number[j] + number[j+1])
        }
      }else{
        for(let j = 0; j < number.length-1; j=j+2){
          Summ.push(number[j] + number[j+1])
        }
        Summ.push(number[number.length-1])
      }
      testNumber()
      function testNumber(){
        firstSumm = Summ.join('').split('')
        let numZero = firstSumm.map((x) => parseInt(x, 10))
        if(firstSumm.length == 9 && numZero.indexOf(0) < 0){
          return
        }else if(firstSumm.length > 9){
          if(firstSumm.length == 10 && numZero.indexOf(0) > 0){
            numZero.splice(numZero.indexOf(0), 1)
            Summ = numZero
          }else{summNumber()}
          //запусть складывание
        }else if( firstSumm.length <= 8){
          add369()
          //запусть добавление цифр
        }else if(firstSumm.length == 9 && numZero.indexOf(0) >= 0){
          summNumber()
        }
      }
      function summNumber(){
        //сложить пары, с проверкой на четность
        let newSumm = []
        if(Summ.length % 2 == 0){
          for(let i = 0; i < Summ.length-1; i=i+2){
            newSumm.push(Summ[i] + Summ[i+1])
          }
          Summ = newSumm
          testNumber()
        }else{
          for(let i = 0; i < Summ.length-2; i=i+2){
            newSumm.push(Summ[i] + Summ[i+1])
          }
          newSumm.push(Summ[Summ.length-1])
          Summ = newSumm
          testNumber()
        }
      }
      function add369(){
        //добавить 369
        Summ.push(3)
        Summ.push(6)
        Summ.push(9)
        testNumber()
      }
      this.result = Summ.join('')
    }
  }
}
</script>

<style scoped>
.code-form{
  text-align: center;
  margin: 0 auto;
  margin-top: 90px;
  max-width: 921px;
  height: 600px;
  background: #847BB2;
}
.input-form{
  padding-top: 120px;
}
button {
  border: none;
  width: 440px;
  height: 100px;
  background: #FFFFFF;
  border-radius: 500px;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  color: #847BB2;
}
input {
  border: none;
  border-bottom:3px solid white;
  background: #847BB2;
  outline: none!important;
  width: 680px;
  height: 63px;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  color: white;
  margin-bottom: 90px;
  padding-left: 20px;
}
input::-webkit-input-placeholder { color: #B7B1D6; }
input::-ms-input-placeholder { color: #B7B1D6; }
input::-ms-input-placeholder { color: #B7B1D6; }
input::placeholder { color: #B7B1D6;}
.code-user{ padding-top: 78px;
  padding-bottom: 90px}
.code-item {
  margin: 0 auto;
  background: radial-gradient(96.73% 2322.6% at 1.22% 50%, #EBA4FD 0%, #B6A3FF 100%);
  border-radius: 500px;
  max-width: 490px;
  max-height: 100px;
}
.code-item p{
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 58px;
  color: white;
}
@media screen and (max-width: 425px) {
  .code-item {
    max-width: 187px;
    max-height: 31px;
  }
  .code-item p{
    padding-top: 0px;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    color: white;
  }
  .code-user{ padding-top: 20px;
    padding-bottom: 31px}
}
@media screen and (max-width: 425px) {
  .code-form{
    margin-top: 30px;
    height: 202px;
    width: 233px;
  }
  .input-form{
    padding-top: 27px;
  }
  input {
    border: none;
    border-bottom:1px solid white;
    background: #847BB2;
    outline: none!important;
    max-width: 172px;
    height: 30px;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    color: white;
    margin-bottom: 5px;
  }
  button {
    margin-top: 15px;
    border: none;
    width: 130px;
    height: 30px;
    background: #FFFFFF;
    border-radius: 500px;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    color: #847BB2;
  }

}
</style>
