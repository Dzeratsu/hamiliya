<template>
<div class="container center"><br>
  <h1>Оплатить подписку на 1 месяц</h1><br>
  <h1 v-if="message" class="error">{{message}}</h1><br>
  <div class="pay"><div class="pay-padding">
    <img src="assets/card.jpg">
  <form id="paymentFormSample" onsubmit="return false;">
    <div><span>Номер карты:</span><br> <input type="text" data-cp="cardNumber"  maxlength="16" placeholder="Номер карты" class="card" onkeyup="this.value = this.value.replace (/\D/gi, '').replace (/^0+/, '')"></div>
    <br>
    <div><span>ММ</span>
    <input type="text" data-cp="expDateMonth"  maxlength="2" class="date" onkeyup="this.value = this.value.replace (/\D/gi, '').replace (/^0+/, '')" ><span>  / ГГ</span>
    <input type="text" data-cp="expDateYear"   maxlength="2" class="date" onkeyup="this.value = this.value.replace (/\D/gi, '').replace (/^0+/, '')"><span class="cv">CVV</span>
    <input type="text" data-cp="cvv"  class="cvv" maxlength="3" placeholder="CVV" onkeyup="this.value = this.value.replace (/\D/gi, '').replace (/^0+/, '')"><br></div><span>Имя владельца: <br></span>
    <input type="text" data-cp="name" placeholder="Имя владельца" v-model="userName" class="name" onkeyup="this.value = this.value.replace (/\d/gi, '').replace (/^0+/, '')"><br>
    <button id="clickmy" type="submit" @click="submit">Оплатить 100 р.</button>
  </form>
  </div>
  </div>
  <form name="downloadForm" action="https://demo.cloudpayments.ru/acs" method="POST"  v-show="form3d" ref="sumb">
    <input type="hidden" name="PaReq" :value="ford3dData.PaReq">
    <input type="hidden" name="MD" :value="ford3dData.MD">
    <input type="hidden" name="TermUrl" :value="ford3dData.TermUrl">
  </form>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "payment",
  data() {
    return {
      form3d: false,
      userName: '',
      key: '',
      ford3dData: {
        PaReq: '',
        MD: '',
        TermUrl: ''
      },
      message: ''
    }
  },
  mounted() {
  },
  methods:{
    submit(){
     let checkout = new cp.Checkout(
        // public id из личного кабинета
        "pk_1127eeaea9234bc2f0af4f3921a29",
        // тег, содержащий поля данных карты
        document.getElementById("paymentFormSample"));
      var result = checkout.createCryptogramPacket();
      if (result.success) {
        this.key = result.packet
        this.submitData()
        console.log(result.packet);
      }
      else {
        // найдены ошибки в введённых данных, объект `result.messages` формата:
        // { name: "В имени держателя карты слишком много символов", cardNumber: "Неправильный номер карты" }
        // где `name`, `cardNumber` соответствуют значениям атрибутов `<input ... data-cp="cardNumber">`
        for (var msgName in result.messages) {
          alert(result.messages[msgName]);
        }
      }
    },
    submitData() {
      let object = {
        "packet": `${this.key}`,
        "name": `${this.userName}`
      }
      axios.post(`https://api.hamiliya.space/cloudpayments/payments/cards/charge`, object,{headers: {Authorization: this.$auth.token.local}})
      .then((res) => {
        if(typeof(res.data.result) == 'object'){
          this.ford3dData.PaReq = res.data.result.PaReq
          this.ford3dData.MD = res.data.result.MD
          this.ford3dData.TermUrl = res.data.result.TermUrl
          setTimeout(() => this.$refs.sumb.submit(), 1000 )
      }else{
          if(res.data.result){
          this.message = res.data.result
          }else {
            this.message = res.data.errors
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.error{
  color: red;
}
.card{
  padding-top: 4px;
}
.cvv {
  margin-left: 40px;
  width: 40px;
}
.pay-padding{
  padding: 5px;
  padding-left: 25px;
}
.date{
  width: 40px;
}
.pay{
  border: 1px solid black;
  margin: 0 auto;
  text-align: left;
  border-radius: 15px;
  max-width: 300px;
  max-height: 350px;
}
span{
  color: gray;
  padding-bottom: 4px;
}
.cv{
  display: none;
  position: absolute;
  padding-left: 56px;
  padding-top: 15px;
  text-align: right;
}
h1{
  font-size: 25px;
}
.center {
  text-align: center;
}
input{
  border-radius: 3px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: none;
  max-width: 450px;
  height: 40px;
  margin-bottom: 15px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
}
button{
  margin-bottom: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  width: 250px;
  height: 40px;
  background: #FFFFFF;
  border-radius: 10px;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  color: black;
  border: none;
}
input::-webkit-input-placeholder { color: #B5B5B5; padding-left: 10px}
input::-ms-input-placeholder { color: #B5B5B5; padding-left: 10px}
input::-ms-input-placeholder { color: #B5B5B5; padding-left: 10px}
input::placeholder { color: #B5B5B5; padding-left: 10px}
.cvv::placeholder { color: #B5B5B5; padding-left: 0px!important;}

@media screen and (max-width: 425px) {
  .input-form {
    padding-top: 20px;
  }
  input{
    border-radius: 3px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border: none;
    max-width: 450px;
    height: 40px;
    margin-bottom: 15px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 43px;
  }
  input::-webkit-input-placeholder { color: #B5B5B5; padding-left: 10px}
  input::-ms-input-placeholder { color: #B5B5B5; padding-left: 10px}
  input::-ms-input-placeholder { color: #B5B5B5; padding-left: 10px}
  input::placeholder { color: #B5B5B5; padding-left: 10px}
  button{
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    width: 250px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 10px;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    color: black;
    border: none;
  }
}

</style>
