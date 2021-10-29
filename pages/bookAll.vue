<template>
<div class="container">
  <second-menu2/>
  <book-catalog v-bind:id="[15, 'book']"/>
</div>
</template>

<script>
export default {
  name: "services",
  layout: 'leftMenu',
}
</script>

<style scoped>

</style>
