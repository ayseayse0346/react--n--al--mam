import { useState } from 'react'

import './App.css'
import Login from './login'
import { users } from './login'
import Hello from './Hello';

function App() {

console.log(users);
  return (
    
   <div>
  <Login/>
  <hr/>
  <Login/>
  <hr/>
  <Login/>
  <hr/>
  <Hello/>
   </div>
    
  )
}

export default App
// istediğimiz kadar çağırabiliyrouz login örneğinde olduğu gibi
