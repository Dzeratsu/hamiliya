<template>

<div class="catalog">
  <book-catalog-item/>
  <book-catalog-item/>
  <book-catalog-item/>
  <book-catalog-item/>
</div>
</template>

<script>
export default {
  name: "bookCatalog"
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
