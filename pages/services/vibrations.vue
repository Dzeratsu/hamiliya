<template>
<div class="wrap">
  <second-menu2/>
  <div class="price">
    <div>
        <div class="value"><div class="text">Расчет вибраций, планетарного состава и выполнения программ систем 4 поля</div> <div class="text2"><b>1 555 руб.</b></div></div>
    </div>
    <div>
      <div class="value-min"><div class="text">Расчет вибраций</div><div class="text2"><b>1 399 руб.</b></div> </div>
    </div>
    <div>
      <div class="value"> <div class="text">Полный расчет + Информация о переходе в 4 поле</div><div class="text2"><b>1 888 руб.</b></div></div>
    </div>
  </div>
  <div class="value-min-mob"><div class="text">Расчет вибраций</div><div class="text2"><b>1 399 руб.</b></div></div>
  <div class="img-price">
    <div class="img-fon"></div>
  </div>
  <input-form/>
</div>
</template>

<script>
export default {
  name: "vibrations"
}
</script>

<style scoped>
.wrap{
  max-width: 1273px;
  margin: 0 auto;
}
.price {
  display: flex;
  justify-content: space-between;
  width: 1273px;
  height: 299px;
  padding-top: 90px;
  font-family: Jost;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: left;
  color: white;

}
.value{
  display: block;
  width: 410px;
  height: 299px;
  background: rgba(132, 123, 178, 0.45);
  border-radius: 50px;
}
.text {
  padding: 28px 48px;
}
.text2 {
  padding: 0px 48px;
}
.value-min{
  display: block;
  width: 373px;
  height: 226px;
  background: rgba(132, 123, 178, 0.45);
  border-radius: 50px;
  border: 3px solid #FFFFFF
}
.img-price{
  margin-top: 90px;
  background: url("./assets/price.png")no-repeat;
  width: 100%;
  height: 100%;
  max-width: 1270px;
  height: 873px;
  background-size:cover;
}
.img-fon{
  background: rgba(132, 123, 178, 0.46);
  height: 873px;
}
.value-min-mob{
display: none;
}
@media screen and (max-width: 425px) {
  .text {
    font-size: 10px;
    padding: 2px 8px;
  }
  .text2 {
    font-size: 10px;
    padding: 2px 8px;
  }
  .wrap{
    max-width: 271px;
  }
  .price {
    display: flex;
    justify-content: space-between;
    width: 271px;
    height: 103px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-weight: 400;
    line-height: 18px;
  }
  .value{
    display: block;
    width: 129px;
    height: 103px;
    border-radius: 20px;
  }
  .value-min{
    display: none;
  }
  .value-min-mob{
    padding: 10px;
    color: white;
    display: block;
    margin: 0 auto;
    width: 130px;
    height: 61px;
    background: rgba(132, 123, 178, 0.45);
    border-radius: 20px;
    border: 1px solid #FFFFFF
  }
  .img-price{
    margin-top: 20px;
    background: url("./assets/price.png")no-repeat;
    width: 100%;
    height: 100%;
    max-width: 270px;
    height: 186px;
    background-size:cover;
  }
  .img-fon{
    background: rgba(132, 123, 178, 0.46);
    height: 186px;
  }
}
</style>
