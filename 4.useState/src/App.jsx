

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

const [count , setcount] = useState(0)
const arttır = ()=>{
  setcount(count+1)
}

console.log("component render edildi."); // her butona basıldığında bütün kodlar render ediliyor. bu kodlar tekrar çalışıyor. yani burdaki set değiştiğinde compenent tekarar çalışıyor. bunu önlemek için
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
<hr/>
<div>
<div>{count}</div>
<div><button onClick={arttır}>Artır</button></div>
</div>
 </div>
  )
}

export default App

// !NOT : bir statein değerini set metodunu kullanarak değiştirdiğinde compenent yeniden render edilir.

// ? Nedr bu  useState: aynı diğer proglamlama dillerinde olduğu gibi bir değişken tanımlamak için kullanılan bir hooks tur.useState(burda default değerini veririz.) vermiş olduğumuz default değer arrayın ilk indexindeki değişkene oturru. daha sonra bunun değerini değiştirmek için de bu fonksiyonu kullanırız setcount gibi . bu fonksiyonu kullanıp bu sattein değerini değiştirdiğimizde de bu sattetin kullanıldığı component yeniden render edilir.
