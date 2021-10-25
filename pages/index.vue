<template>
<div class="container">
  <second-menu/>
  <catalog v-bind:id="[11, 'media']"/>
</div>
</template>

<script>
export default {
  auth: false,
  name: "mantras"
}
</script>

<style scoped>

</style>
