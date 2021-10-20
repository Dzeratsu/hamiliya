<template>
<div class="container" >
    <div class="catalog">
      <catalog-item v-bind:materialPrevie="[item, id[1]]" v-for="item in materialData.materials"/>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import CatalogItem from "./catalogItem";
export default {
  components: {CatalogItem},
  props: ['id'],
  name: "catalog",
  data(){
    return{
      materialData: ''
    }
  },
  mounted() {
      axios.get(`http://apiblog.hamiliya.social/category/${this.id[0]}/page/0`)
        .then((res) =>{
          this.materialData = res.data.categories_materials.result
        })
    }
}
</script>

<style scoped>
.catalog{
  width: 1273px;
  margin: 0 auto;
  padding-top: 90px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media screen and (max-width: 425px) {
  .catalog{
    width: 271px;
    padding-top: 30px;
  }
}
</style>
