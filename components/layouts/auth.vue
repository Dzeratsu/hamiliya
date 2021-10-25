<template>
<div>
  <div class="auth" v-if="!autorization">
    <div><a href="https://hamiliya.social/guest" target="blank">Регистрация</a></div>
    <div>/</div>
    <div><NuxtLink to="/login"> Авторизация</NuxtLink></div>
  </div>
  <div class="auth" v-if="autorization">
    <div><span v-on:click="log">Вы авторизованы</span></div>
    </div>
</div>
</template>

<script>
export default {
  name: "auth",
  data(){
    return {
      autorization: this.$auth.loggedIn
    }
  },
  methods: {
    log(){
      this.$auth.logout()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.auth{
  display: flex;
  justify-content: right;
  padding-top: 10px;
}
.auth div{
  padding-right: 15px;
}
.auth span{
  font-size: 16px;
  color: white;
}
a{
  font-size: 16px;
  color: white;
}
@media screen and (max-width: 425px) {
  .auth div{
    padding-right: 10px;
  }
  a{
    font-size: 12px;
    color: white;
  }
}
</style>
