<template>
  <div class="audio">
<img src="~/assets/audio.png">
  </div>
</template>

<script>
export default {
  name: "itemAudio"
}
</script>

<style scoped>
.audio{
  text-align: center;
  padding-top: 120px;
  padding-bottom: 120px;
}
@media screen and (max-width: 425px) {
  .audio{
    padding-top: 30px;
    padding-bottom: 30px;
  }
  img {
    width: 287px;
    height: 32px;
  }
}

</style>
