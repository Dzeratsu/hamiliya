<template>
<div class="input">
  <div><input placeholder="Имя" type="text"></div>
  <div> <input placeholder="E-mail" type="email"></div>
  <div><input placeholder="Телефон" type="text"></div>
  <div><button type="submit">Оплатить расчет</button></div>
</div>
</template>

<script>
export default {
  name: "inputForm"
}
</script>

<style scoped>
.input {
  padding-top: 90px;
  display: flex;
  flex-direction: column;
 text-align:  center;
  font-family: jost, Arial, sans-serif;
}
input{
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
</style>
