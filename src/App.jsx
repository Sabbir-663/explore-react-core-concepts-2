import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './User'
import Friends from './Friends'


function App() {
  function handleClick(){
    alert('Button Clicked')
  }

  const handleClick2 =()=>{
    alert('Button 2 Clicked')


  }

  function handleClick4(num){
    alert(num+5)
  }

  return (
    <>
      
      <h3> React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
    <Counter></Counter>
    

      <button onClick={handleClick}>Click Me</button>
      <br />
      <br />
      <button onClick={handleClick2}>Click Me</button>
      <br />
      <br />
      <button onClick={()=>{
        alert('Button 3 Clicked')
      }}>Click Me</button>

<button onClick={()=>{handleClick4(4)}}>Click Me</button>
    
    </>
  )
}

export default App
