<template>
  <div class="audio">
    <audio id="player" :src="urlAud" controls controlsList="nodownload noplaybackrate" ></audio>
  </div>
</template>

<script>
export default {
  props:['aud'],
  name: "itemAudio",
  date() {
    return {
    urlAud: ''
    }
  },
  created() {
    this.urlAud = "https://api.hamiliya.space/"+this.aud.url
  }
}
</script>

<style scoped>
audio{
  height: 85px;
  margin: 0 auto;
  max-width: 1270px;
  width: 100%;
}
audio::-webkit-media-controls-panel{
  border-radius: 0px;
  background-color: #847BB2;
}


.audio{
  text-align: center;
}
@media screen and (max-width: 425px) {
  .audio{
    z-index: 0;
  }
  img {
    width: 287px;
    height: 32px;
  }
}

</style>
