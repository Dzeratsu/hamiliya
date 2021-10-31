<template>
  <div class="container">
    <div class="input">
      <form action="" method="post" @submit.prevent="userLogin" >
        <div class="enter">Вход в аккаунт</div>
        <br>
        <input placeholder="введите логин" v-model="email"><br>
      <input placeholder="введите пароль" v-model="password" type="password"><br><br>
        <h1>{{errors}}</h1>
        <button type="submit">Войти в аккаунт</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: '',
      password: '',
      errors: ''
    }
  },
  methods: {
    async userLogin(){
      try {
        let response = await this.$auth.loginWith('local', {data: {
          email: this.email,
          password: this.password
          }
        })
        this.errors = response.data.errors
        if(response.data.status == true){
          console.log(this.$auth)
          this.$router.push('/')
        }
      }catch (err){
        console.log(err)
      }
    }
/*    async login(){
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        }).then((res) => {
          if(res.data.errors) {
            this.errors = res.data.errors
          }else{
            localStorage.setItem('token', res.data.token)
            /!*this.$auth.setUserToken('local', 'Bearer ' + res.data.token)*!/
            this.$router.push('/')
          }
        })
      }catch(error){
        alert('abc')
      }
    }*/
  }
}
</script>

<style scoped>
h1{
  font-size: 26px;
  color: red;
}
.container{
  text-align: center;
}
.input{
  padding-top: 50px;
}
input{
  border: none;
  width: 490px;
  height: 90px;
  margin-bottom: 20px;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 43px;
  padding-left: 20px;
}
button{
  margin-top: 30px;
  width: 361px;
  height: 76px;
  background: #FFFFFF;
  border-radius: 50px;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  color: #847BB2;
  margin-bottom: 120px;
  border: none;
}
input::-webkit-input-placeholder { color: #B5B5B5; padding-left: 42px}
input::-ms-input-placeholder { color: #B5B5B5; padding-left: 42px}
input::-ms-input-placeholder { color: #B5B5B5; padding-left: 42px}
input::placeholder { color: #B5B5B5; padding-left: 42px}
@media screen and (max-width: 425px) {
  .input-form {
    padding-top: 20px;
  }
  input{
    width: 270px;
    height: 30px;
    margin-bottom: 5px;
    font-size: 10px;
    line-height: 14px;
  }
  input::-webkit-input-placeholder { color: #B5B5B5; padding-left: 10px}
  input::-ms-input-placeholder { color: #B5B5B5; padding-left: 10px}
  input::-ms-input-placeholder { color: #B5B5B5; padding-left: 10px}
  input::placeholder { color: #B5B5B5; padding-left: 10px}
  button{
    margin-top: 20px;
    width: 130px;
    height: 30px;
    background: #847BB2;
    border-radius: 500px;
    font-size: 10px;
    font-style: normal;
    line-height: 14px;
    color: white;
    margin-bottom: 30px;
  }
}
</style>
