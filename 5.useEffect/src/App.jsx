import { useEffect, useState } from 'react'

import './App.css'

function App() {

const [firstName , setFirstname] = useState("")
const [lastName , setLastname] = useState("")


useEffect(()=>{
  console.log("her zaman çalışır.");
}) // callback function oluşturduk.yani fonksiyonun ilk parametresi yine bir fonksiyon (arrow function)

useEffect(()=>{
console.log("compenent ilk render edildiğinde çalışır.");
},[]) // ikinci parametresini boş array verdim.

useEffect(()=>{
console.log("ilk render edildiğinde ve firstName state değeri değiştiğinde çalışır.");
},[firstName]) 

// useEffect(()=>{
// console.log("ilk render edildiğinde ve lastName state değeri değiştiğinde çalışır.");
// },[lastName])
useEffect(()=>{
  console.log("ilk render edildiğinde ve lastName veya firstname state değerlrti değiştiğinde çalışır.");
  },[lastName , firstName])

  return (
  <div>
    <div><button onClick={()=>setFirstname("ayse")}>adı değiştir</button></div>
    <div><button onClick={()=>setLastname("kahraman")}>soyad değiştir</button></div>
  </div>
  )
}

export default App
