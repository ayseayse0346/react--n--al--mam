import { useState } from 'react'

import './App.css'
import Product from './Product'
import Container from './Container'
import { Component } from 'react'

function App() {
 const productNme= "buzdolabı"

  return (
    <> 
    <div>
<Product productNme="ayakkabı" price={3200}/>
<hr/>
<Product productNme="pantalon" price={900}/>
<hr/>
<Product productNme="buzdolabı" price={15000}/>
<hr/>
 </div>
 <div>
   <Container>
    <hr/>
    <Product productNme="pantalon" price={900}/>
    <hr/>
    <Product productNme="ayakkabı" price={900}/>
    </Container>
 </div>

    </>

  )
}

export default App

//? component içinde component kullanabviriiz. container compenenti içinde product compenentini çağırabiliriz. ama product containerin içinde yani children oluyo o yüzden function içinde süslü children yazmalıyız başka bir şey yazılmaz.
//? 
