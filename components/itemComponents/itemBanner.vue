<template>
  <div class="banner">
    <div class="banner-fon">
      <div class="banner-text">
        <div class="title">Мантра</div>
        <div class="description">на внутренне очищение</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemBanner"
}
</script>

<style scoped>
.banner{
  margin-top: 90px;
  background: url("./assets/mantrItem.png")no-repeat;
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
.title div {
  margin: 0 auto;
  width: 454px;
}
</style>
