<template>
  <div class="container">
    <auth/>
    <div><router-link to="/"><img src="/logo.png"></router-link></div>
    </div>
</template>

<script>
import Auth from "./auth";
export default {
  name: "testHEader",
  components: {Auth}
}
</script>

<style scoped>
.container div{
  text-align: center;
}
img {
  margin: 0 auto;
}
</style>
