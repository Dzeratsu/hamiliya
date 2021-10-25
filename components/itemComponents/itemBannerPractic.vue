<template>
  <div class="banner">
    <div class="banner-fon">
      <div class="banner-text">
        <div class="description">Вы можете ознакомится с нашими <br> фирменными курсами</div>
        <div class="description"><div style="padding-top: 15px"><button>Подробнее</button></div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mantraName'],
  name: "itemBanner"
}
</script>

<style scoped>
.banner{
  margin: 0 auto;
  margin-top: 90px;
  background: url("./assets/mantrItem.png")no-repeat;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  height: 504px;
  background-size:cover;
}
button{
  height: 74px;
  width: 280px;
  left: 559px;
  top: 781px;
  border-radius: 500px;
  border: 0px;
  background-color: #847BB2;
  color: white;
  font-family: Jost;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
}
.banner-fon{
  background: rgba(132, 123, 178, 0.46);
  height: 504px;
  text-align: center;
}

.banner-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

.title {
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  text-align: center;
  color: white;
}
.description {
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  color: white;
  text-align: center;
}
@media screen and (max-width: 425px) {
  button{
    padding-top: -15px;
    height: 24px;
    width: 100px;
    left: 559px;
    top: 781px;
    border-radius: 500px;
    border: 0px;
    background-color: #847BB2;
    color: white;
    font-family: Jost;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 0px;
    letter-spacing: 0em;
    text-align: center;
  }
  .banner{
    margin-top: 30px;
    max-width: 320px;
    height: 137px;
  }
  .banner-fon{
    height: 137px;
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
  .title {
    font-size: 15px;
    line-height: 21px;
  }
  .description {
    font-size: 7px;
    line-height: 10px;
  }
}
</style>
