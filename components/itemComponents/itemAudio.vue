<template>
  <div class="audio">
    <audio id="player" :src="urlAud" controls></audio>
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
    this.urlAud = "http://apiblog.hamiliya.social/"+this.aud.url
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
audio::-webkit-media-controls-mute-button{
  /* display: none;*/
}
audio::-webkit-media-controls-play-button{
  /*  display: none;*/
}
audio::-webkit-media-controls-timeline-container {

}
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
