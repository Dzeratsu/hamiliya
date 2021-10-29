<template>
<div class="input-form">
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
.input-form {
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
