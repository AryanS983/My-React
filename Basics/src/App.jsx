import React, { useState } from 'react'
import Products from './Products'

function App() {
  var [a,b] = useState(69)
  return (
    <>
      <div className="card">
        Hello This is Aryan
      </div>
      {/* We can simply pass the value of a variable to a component -> These are called props. Eg price, data */}
      <Products price={50} data={{"age":30, "sex": "male"}}/>        
      <div className="count">
        <p>{a}</p>
        <button onClick={()=>{b(a+1)}}>Click</button>
      </div>
    </>
  )
}

// To create a project run the command:  npm create vite@latest

export default App