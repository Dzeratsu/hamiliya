<template>
<div class="text">
<h1>Вы можете приобрести книги Ирины Чикуновой и Цивилизации Хамилии</h1>
  <div class="description"><div style="padding-top: 15px"><button><a href="https://irinachikunovaacademy.ru/teach/control/stream/view/id/392111549" target="blank">Подробнее</a></button></div></div>
<div class="catalog">
    <book-catalog-item v-bind:materialPrevie="[item, id[1]]" v-for="item in materialData.materials"/>
</div>
</div>
</template>

<script>
import BookCatalogItem from "./bookCatalogItem";
export default {
  components: {BookCatalogItem},
  props: ['id'],
  name: "bookCatalog",
  data() {
    return {
      materialData: ''
    }
  },
      mounted() {
      this.$axios.get(`https://api.hamiliya.space/category/${this.id[0]}/page/0`)
        .then((res) => {
          this.materialData = res.data.categories_materials.result
        })
  }
}
</script>

<style scoped>
.text{
  padding-top: 25px;
  text-align: center;
  margin: 0 auto;
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
.catalog{
  width: 1047px;
  margin: 0 auto;
  padding-top: 90px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
h1{
  font-size: 31px;
  text-align: center;
  color: white;
}
@media screen and (max-width: 425px) {
  .catalog{
    width: 249px;
    margin: 0 auto;
    padding-top: 30px;
  }
}
</style>
