import React from 'react'

 export const users = [
  {
    userName :"ayse",
    password:"1"
  },
  {
userName:"akif",
password:"2"
  }
]


function Login() {
  return (
    <>
     <div>
      <div>
        <p>kullanıcı adınız:</p>
        <input type="text" />
        </div>  

     <div>
        <p>Şifreniz:</p>
        <input type="text" />
        </div>   


        <button>Giriş Yap</button>
     </div>
    </>
   
  )
}

export default Login