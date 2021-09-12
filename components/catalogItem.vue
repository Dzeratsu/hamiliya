<template>
<div class="catalog-item">
<img :src="require('assets/catalog-img/img1.png')">
  <div class="breadCrumbs">
    <NuxtLink to="/">Медиа</NuxtLink>
    <NuxtLink to="/">Мантры</NuxtLink>
  </div>
  <div class="item-title">Мантра на внутренне очищение и восполнение энергии</div>
</div>
</template>

<script>
export default {
  name: "catalogItem"
}
</script>

<style scoped>
.catalog-item{
  width: 390px;
  height: 431px;
  background-color: white;
  margin-bottom: 50px;
}
.catalog-item div {
  margin: 21px 21px 21px 21px;
}
.breadCrumbs{
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #847BB2;
}
.item-title {
  font-family: Jost;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: left;
  color: #847BB2;
}
.breadCrumbs a {
  margin-right: 10px;
  border-bottom: 1px solid #847BB2;
  padding-bottom: 2px;
}
</style>
