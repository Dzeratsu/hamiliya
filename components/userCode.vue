<template>

</template>

<script>
export default {
  name: "userCode"
}
</script>

<style scoped>
.code-user{ padding-top: 78px;
padding-bottom: 90px}
.code-item {
  margin: 0 auto;
  background: radial-gradient(96.73% 2322.6% at 1.22% 50%, #EBA4FD 0%, #B6A3FF 100%);
  border-radius: 500px;
  max-width: 490px;
 max-height: 100px;
}
.code-item p{
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 58px;
  color: white;
}
@media screen and (max-width: 425px) {
  .code-item {
    max-width: 187px;
    max-height: 31px;
}
  .code-item p{
    padding-top: 0px;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    color: white;
  }
  .code-user{ padding-top: 20px;
    padding-bottom: 31px}
}
</style>
