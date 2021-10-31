<template>

<div class="catalog">
    <book-catalog-item v-bind:materialPrevie="[item, id[1]]" v-for="item in materialData.materials"/>
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
.catalog{
  width: 1047px;
  margin: 0 auto;
  padding-top: 90px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media screen and (max-width: 425px) {
  .catalog{
    width: 249px;
    margin: 0 auto;
    padding-top: 30px;
  }
}
</style>
