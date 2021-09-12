<template>
<div class="container">
  <div class="code-form">
    <div class="input-form">
      <div><input placeholder="Имя Фамилия Отчество" type="text"></div>
      <div><input placeholder="Телефон" type="text"></div>
      <div><input placeholder="Желание" type="text"></div>
      <div><button type="submit">Получить код</button></div>
    </div>
  </div>
  <div> <user-code/></div>
</div>
</template>

<script>
export default {
  name: "codes"
}
</script>

<style scoped>
.code-form{
  text-align: center;
  margin: 0 auto;
  margin-top: 90px;
  width: 921px;
  height: 799px;
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
}
input::-webkit-input-placeholder { color: #B7B1D6; }
input::-ms-input-placeholder { color: #B7B1D6; }
input::-ms-input-placeholder { color: #B7B1D6; }
input::placeholder { color: #B7B1D6;}
</style>
