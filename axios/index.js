export default function({ $axios, store, app, redirect, error, $auth }) {

  $axios.interceptors.response.use(response => {
      if(response.data.errors === 'Отсутствует подписка') {
        return redirect('/byu')
      }else if (response.data.errors === "no access"){
        return redirect('/login')
      }else if (response.data.errors === "Invalid token" || response.data.errors === "Token error"){
        $auth.logout()
        return redirect('/login')
      }
      else {
        return response;
      }
    })
  }


