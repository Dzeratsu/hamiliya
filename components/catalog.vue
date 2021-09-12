<template>
<div class="container">
  <div class="catalog">
    <catalog-item/>
    <catalog-item/>
    <catalog-item/>
    <catalog-item/>
    <catalog-item/>
    <catalog-item/>
    <catalog-item/>
    <catalog-item/>
    <catalog-item/>
  </div>
</div>
</template>

<script>
export default {
  name: "catalog"
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
</style>
