import React from 'react'
// !jsx nedir ve js -html kodları nasıl birleşitirilir,css özellikleri nasıl verilir 
function testComponent() {
    // js kodları yazılır.
    let a = 15
    const firstName = "ayşe"
    let vize = 60;
    let final = 80;
    let sonuç = true
    let isimler = [
        "akif",
        "ayşe",
        "elif",
        "bahar"
    ]
    return (
        //html kodları yazıloır.
        <div>
            <p>a değişkeninin değeri:{a}</p>
            <p>müşteri ismi : {firstName}</p>
            <p>ortalama:{(vize + final) / 2}</p>
            {sonuç ? <p>ehliyet alabilirsin</p> : <p>ehliyet alamazsın</p>}
            {(vize + final) / 2 >= 50 ? <p>tebrikler geçtin</p> : <p>kaldın</p>}

            {
                isimler.map((isim , index) => (
              <div style={{
                backgroundColor : 'orange',
                border: "1px solid black"
              }} key={index}>{isim}</div>
                ))
            }


        </div>

    )
}

export default testComponent

// js kodunu html ile {} parantezle birleştiriiz.
// css özelliklerini style{{buaraya veririz.}}