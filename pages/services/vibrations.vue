<template>
<div class="wrap">
  <second-menu2/>
  <div class="price">
    <div>
        <div class="value"> </div>
    </div>
    <div>
      <div class="value-min"> </div>
    </div>
    <div>
      <div class="value"> </div>
    </div>
  </div>
  <div class="img-price">
    <div class="img-fon"></div>
  </div>
  <input-form/>
</div>
</template>

<script>
export default {
  name: "vibrations"
}
</script>

<style scoped>
.wrap{
  max-width: 1273px;
  margin: 0 auto;
}
.price {
  display: flex;
  justify-content: space-between;
  width: 1273px;
  height: 299px;
  padding-top: 90px;
}
.value{
  display: block;
  width: 410px;
  height: 299px;
  background: rgba(132, 123, 178, 0.45);
  border-radius: 50px;
}
.value-min{
  display: block;
  width: 373px;
  height: 226px;
  background: rgba(132, 123, 178, 0.45);
  border-radius: 50px;
  border: 3px solid #FFFFFF
}
.img-price{
  margin-top: 90px;
  background: url("./assets/price.png")no-repeat;
  width: 100%;
  height: 100%;
  max-width: 1270px;
  height: 873px;
  background-size:cover;
}
.img-fon{
  background: rgba(132, 123, 178, 0.46);
  height: 873px;
}
</style>
