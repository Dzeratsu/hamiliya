<template>
<div class="catalog-item">
<!--  <NuxtLink to="/media/mantrasItem">-->
  <NuxtLink :to="{path: `/${materialPrevie[1]}/${materialPrevie[0].id}`}">
    <img :src="imgUrl"/>
  <div class="item-title">{{ materialPrevie[0].name}}</div>
  </NuxtLink>
</div>
</template>

<script>
export default {
  props:['materialPrevie'],
  name: "catalogItem",
  data() {
    return {
      imgUrl: 'http://apiblog.hamiliya.social/' + this.materialPrevie[0].cover_img
    }
  }
}
</script>

<style scoped>

.catalog-item{
  width: 390px;
  height: 351px;
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
@media screen and (max-width: 425px) {
  .catalog-item{
    width: 83px;
    height: 92px;
    margin-bottom: 11px;
  }
  img{
    width: 83px;
    height: 38px;
  }
  .breadCrumbs{
    font-size: 5px;
  }
  .item-title {
    font-size: 7px;
    line-height: 10px;
  }
  .catalog-item div {
    margin: 5px 5px 5px 5px;
  }

}
</style>
