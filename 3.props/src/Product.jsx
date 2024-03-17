import React from 'react'

function Product( {productNme,price}) {
    // const {productNme,price} =props
//    destructiring yaptık hatta bunu yorum yaparak yukarda havada destructuring yaptık.
  return (
    <div>
      <div>ÜRÜN BİLGİLERİ</div>
      <div>
        <div>isim:{productNme}</div>
        <div>fiyat:{price}tl</div>
      </div>
    </div>
  )
}

export default Product