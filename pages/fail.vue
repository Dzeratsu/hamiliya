<template>
  <div class="container center"><div class="center">
    <h1>При оплате возникли проблемы</h1>
  </div>
  </div>
</template>

<script>
export default {
  name: "fail",
  mounted() {
    setTimeout(()=> {
      this.$router.push('/')
    }, 5000)
  }
}
</script>

<style scoped>
.center {
  padding-top: 35px;
  margin: 0 auto;
  text-align: center;
}
h1{
  margin: 0 auto;
  font-size: 25px;
}

</style>
