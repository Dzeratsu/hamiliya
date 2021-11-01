<template>
<div class="container">Начнется загрузка книги PDF откроется в браузере</div>
</template>

<script>
export default {
  middleware: 'auth',
  name: "_bookitem",
  data () {
    return {
    apiURL: 'https://api.hamiliya.space/'
    }
  },
  mounted() {
    this.$axios.get(`https://api.hamiliya.space/get_materials/${this.$route.params.bookitem}`)
    .then((res) => {
      let doc = res.data.materials.file
      for(let i = 0; i < doc.length; i++){
        if(doc[i].documents == 1) {
          this.apiURL + doc[i].url
        }
      }
      this.$router.redirect(`${this.apiURL}`)
    })
  }
}
</script>

<style scoped>

</style>
