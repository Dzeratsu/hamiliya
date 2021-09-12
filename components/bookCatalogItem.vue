<template>
  <div class="catalog-item">
    <img :src="require('assets/catalog-img/book.png')">
    <div class="breadCrumbs">
      <NuxtLink to="/">Услуги</NuxtLink>
      <NuxtLink to="/">Книги</NuxtLink>
    </div>
    <div class="item-title">Книга "Питание"</div>
  </div>
</template>

<script>
export default {
  name: "bookCatalogItem"
}
</script>

<style scoped>
.img-book {
display: block;
width: 411px;
  height: 590px;
}
.catalog-item{
  width: 411px;
  height: 757px;
  background-color: #847BB2;
  margin-bottom: 90px;
}
.catalog-item div {
  margin: 20px 20px 20px 20px;
}
.breadCrumbs{
  font-family: jost, Arial, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  text-align: left;
  color: white;
}
.item-title {
  font-family: jost, Arial, sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  text-align: left;
  color: white;
}
.breadCrumbs a {
  margin-right: 10px;
  border-bottom: 1px solid white;
  padding-bottom: 2px;
}
</style>
