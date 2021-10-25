<template>
<div class="container">
  <form id="paymentFormSample" onsubmit="return false;">
    <input type="text" data-cp="cardNumber" value="4242 4242 4242 4242">
    <input type="text" data-cp="expDateMonth" value="05">
    <input type="text" data-cp="expDateYear" value="22">
    <input type="text" data-cp="cvv" value="633">
    <input type="text" data-cp="name" value="KONSTANTIN TESTOV">
    <button id="clickmy" type="submit" @click="submit">Оплатить 100 р.</button>
  </form>
</div>
</template>

<script>
export default {
  name: "payment",
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
        // сформирована криптограмма
        //alert(result.packet);
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
    }
  }
}
</script>

<style scoped>

</style>
