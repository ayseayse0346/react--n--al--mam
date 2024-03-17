import React from 'react'
import { Children } from 'react'

const Container = ({children}) => {
  return (
    <div>
         <div>Container componenti çalıştı</div>
         {children}
    </div>
   
  )
}

export default Container
