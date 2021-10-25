<template>
<div class="container center">
  <h1 v-if="message">{{message}}</h1>
  {{ford3dData}}
  <form id="paymentFormSample" onsubmit="return false;">
    <input type="text" data-cp="cardNumber" value="4242 4242 4242 4242">
    <input type="text" data-cp="expDateMonth" value="05">
    <input type="text" data-cp="expDateYear" value="22">
    <input type="text" data-cp="cvv" value="633">
    <input type="text" data-cp="name" value="KONSTANTIN TESTOV" v-model="userName">
    <button id="clickmy" type="submit" @click="submit">Оплатить 100 р.</button>
  </form>
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
      axios.post(`https://api.hamiliya.space/cloudpayments/payments/cards/charge`, object,{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
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
h1{
  font-size: 25px;
}
.center {
  text-align: center;
}
</style>
