import React, { useState } from 'react'


// Instead of pass every single prop as a parameter we canuse the props object and obtain the props by referencing with its name
// Example:- 
// function Products(props){
//   return (
//    <>{props.price}, (props.data.age)</>
//   )
// }
function Products({price, data}) {
    var [a,b] = useState(price)
    var [p,q] = useState(false)
    
  return (
    
    <>
        <div className='pro'>
            {p? "Apple Juice" : "Orange Juice" }
            <div>Price: {a}</div>
            <button onClick={()=>{b(a+1); q(!p)}}>Click</button>   // Canging two things in a single click on the screen
        </div>
        <div className="pro">
            Buyer:-
            <p>age = {data.age}</p>
            <p>sex = {data.sex}</p>
        </div>
        
    </>
    
  )
}

export default Products