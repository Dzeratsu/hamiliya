<template><div>
  <div class="b-popup">
    <div class="b-popup-content">
     <div><NuxtLink to="/"><img src="/logoPop.png"></NuxtLink></div>
      <div class="description">Вы вошли в платный раздел. Чтобы получить полный доступ ко всем платным продуктам (кроме расчета вибраций) выберете подписку.</div>
      <div class="price">
        <div><p>1 месяц за 529 ₽</p></div>
        <div><p>3 месяца за 1350 ₽</p></div>
        <div><p>1 год за 3990 ₽</p></div>
      </div>
      <div> <button>Получить код</button></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "itemPopUp"
}
</script>

<style scoped>
.b-popup{
  margin: 0 auto;
  width:100%;
  min-height:100%;
  background: rgba(0, 0, 0, 0.35);
  overflow: visible;
  position: fixed;
  top:0px;
}
.b-popup .b-popup-content{
  margin-top: 500px;
  margin:0 auto;
  background-color: white;
  border-radius:5px;
  box-shadow: 0px 0px 10px #000;
  height: 1000px;
  width: 1200px;
  left: 120px;
  text-align: center;
}

img {
  margin: 0 auto;
  padding-top: 50px;
}
button{
  height: 84px;
  width: 323px;
  background: #847BB2;
  border-radius: 500px;
  border: none;
  font-family: Jost;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
}
.description {
  padding-top: 50px;
  margin: 0 auto;
  width: 640px;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  text-align: center;
}
p{
  padding-top: 14px;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  color: #847BB2;
}
.price {
  padding-top: 90px;
  width: 990px;
  margin: 0 auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  padding-bottom:90px;
}
.price div {
  width: 300px;
  height: 70px;
  border: 3px solid #847BB2;
  box-sizing: border-box;
}
</style>
