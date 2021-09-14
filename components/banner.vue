<template>
  <div class="banner">
  <div class="banner-fon">
    <div class="banner-text">
    <div class="title"><div>Вы можете ознакомится с нашими фирменными курсами</div></div>
    <div> <button>Подробнее</button></div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner"
}
</script>

<style scoped>
.banner{
  margin: 0 auto;
  margin-top: 90px;
  background: url("./assets/banner.png")no-repeat;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  height: 504px;
  background-size:cover;
}
.banner-fon{
  background: rgba(132, 123, 178, 0.46);
  height: 504px;
  text-align: center;
}
.banner-fon span {
  width: 493px;
  font-family: Jost;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0em;
  color: white;
}
.banner-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
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
.title {
  padding-bottom: 47px;
  font-family: Jost;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
}
.title div {
  margin: 0 auto;
  width: 454px;
}
@media screen and (max-width: 425px) {
  .banner{
    margin-top: 20px;
    background: url("./assets/banner.png")no-repeat;
    width: 100%;
    height: 100%;
    max-width: 320px;
    height: 114px;
    background-size:cover;
  }
  .banner-fon{
    height: 114px;
  }
  .title {
    padding-bottom: 9px;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0em;
  }
  .title div {
    width: 159px;
  }
  button{
    height: 25px;
    width: 89px;
    background: #847BB2;
    border-radius: 500px;
    border: none;
    font-family: Jost;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
  }
}


</style>
