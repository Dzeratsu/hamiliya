<template>
<div class="container"></div>
</template>

<script>
export default {
  name: "_bookitem",
  data () {
    return {
    apiURL: 'https://api.hamiliya.space/'
    }
  },
  methods: {
    openBook(){
      window.open(this.apiURL)
    }
  },
  mounted() {
    this.$axios.get(`https://api.hamiliya.space/get_materials/${this.$route.params.bookitem}`)
    .then((res) => {
      let doc = res.data.materials.file
      for(let i = 0; i < doc.length; i++){
        if(doc[i].documents === 1) {
          this.apiURL += doc[i].url
        }
      }
      if(this.apiURL !== 'https://api.hamiliya.space/'){
        this.$router.push('/bookAll')
        this.openBook()
      }

      /*this.$router.redirect(`${this.apiURL}`)*/
    })
  }
}
</script>

<style scoped>

</style>
