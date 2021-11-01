<template>
  <div>
  <div class="b-popup">
    <div class="b-popup-content">
      <div><NuxtLink to="/"><img :src="require('/assets/logoPop.png')"></NuxtLink></div>
      <div class="description">Вы вошли в платный раздел. Чтобы получить полный доступ ко всем платным продуктам (кроме расчета вибраций) выберете подписку.</div>
      <div class="price">
        <NuxtLink to="/payment"><div><p>1 месяц за 529 ₽</p></div></NuxtLink>
        <NuxtLink to="/payment"><div><p>3 месяца за 1350 ₽</p></div></NuxtLink>
        <NuxtLink to="/payment"><div><p>1 год за 3990 ₽</p></div></NuxtLink>
      </div>
      <div> <button><NuxtLink to="/codes">Получить код</NuxtLink></button></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "byu"
}
</script>

<style scoped>
.b-popup {
  padding-top: 25px;
  padding-bottom: 25px;
}
.b-popup .b-popup-content{
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
@media screen and (max-width: 425px) {
  .b-popup{
    margin: 0 auto;
    min-heightwidth:100%;
    min-height:100%;
    background: rgba(0, 0, 0, 0.35);
    overflow: visible;
    position: fixed;
    top:0px;
  }
  .b-popup .b-popup-content{
    margin:0 auto;
    margin-top: 104px;
    background-color: white;
    border-radius:5px;
    box-shadow: 0px 0px 10px #000;
    height: 315px;
    width: 255px;
    left: 120px;
    text-align: center;
  }
  img{
    padding-top: 23px;
    width: 79px;
    height: 68px;
  }
  button{
    width: 130px;
    height: 30px;
    font-size: 10px;
    line-height: 14px;
  }
  .description {
    padding-top: 20px;
    margin: 0 auto;
    width: 206px;
    font-size: 10px;
    line-height: 14px;
  }
  .price {
    padding-top: 20px;
    width: 102px;
    margin: 0 auto;
    display: block;
    padding-bottom:20px;
  }
  .price div {
    width: 102px;
    height: 20px;
    border: 1px solid #847BB2;
    margin-bottom: 5px;
  }
  p{
    padding-top: 1px;
    font-size: 10px;
    line-height: 14px;
  }
}
</style>
