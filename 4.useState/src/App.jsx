

import { useState } from 'react' //otomatik import oldu.
import './App.css'

function App() {
//  string tckn = "123456789"
// string firstname = "ayse" bu gibi tanımlamalarda useState kullanırız.
// useState : hooks
// const [firstName , setFirstname] = useState //BU ŞEKİLDE YAPINCA OTOMATİK İMPORT ETTİ.

const [firstName , setFirstname] = useState("ayse");
const [lastName , setLastname] = useState("kahraman") //str
const [names , setNames] = useState(["ayse","akif","elif","bahar"]) //array
// console.log(names);
const [userInfo , setUserInfo] = useState({username:"ayseayse",password:"12345"}) //obje
const [show , setShow] =useState(false)

const handleChange = ()=>{
  setFirstname("akif")
} 


  return (
 <div>
  {/* {firstName} {lastName} */}

  <div>{firstName}</div>
  <br/>
  <div><button onClick={handleChange}>ismi değiştir</button></div>
  <br/>
  <hr/> 
<div>
  {names.map((name,index)=>(
    <div key={index}>{name}</div>
  ))}
</div>
<br/>
<div>
  {userInfo.username} {userInfo.password}
</div>

<div>
  {show ? <div>{userInfo.username} {userInfo.password}</div> : <div>bilgileri gösterme</div>}
</div>
 </div>
  )
}

export default App

// !NOT : bir statein değerini set metodunu kullanarak değiştirdiğinde compenent yeniden render edilir.
