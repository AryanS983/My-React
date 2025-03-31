import React, { useEffect, useState } from 'react'
import studentData from "./data.json" with { type: "json" };

// We can do the same thing as below by using props in react
// const Student=()=> {
//   return(
//     <>
//       {
//         studentData.map((student) => {
//           return <div> Name : {student.name}, Age: {student.age} </div>
//         })
//       }
//     </>
//   )
// }

//Name of a Component Should ALWAYS start with a capital letter 
const Student=({data})=> {
  return(
    <> 
      <div> Name : {data.name}, Age: {data.age} </div>
    </>
  )
}


function App() {
  var name="Aryan"
  var [value,changefn] = useState(0)   // For better readability one can use the value pair [counter , setcounter]
  // Never assign a value to a useState manually, Always use the setfunction
  // useEffect hook runs everytime the component is reloaded
  useEffect(()=>{
    changefn(5)
  }, [])   
  // the array at the end [] is depoendency array. If the array is empty the useEffect will only run once when the page reloads
  // But if we give a varibale (like counter) inside the array the useEffect is executed eberytime the variable changes.
  return (
    <>
      <div className='card'>
        Hello {
          name? (
            <>{name}!</>
          ):(
            <>someone!</>
          )
        }
      </div>
      <div className="card">
        {studentData.map((student)=>{
          return < Student data={student}/>
        })}
      </div>
      <div className="card">
        <h1>Counter</h1>
        {/* <button onClick={()=>(changefn((prev) => prev+1))}>+</button>   This is also a method try not to use this method chud jaoge warna   */ }   
        <button onClick={()=>{changefn(value>=11? 0 : value+1)}}>+</button>
        <h3>{value}</h3>
        <button onClick={()=>{changefn(value<=-11? 0 : value-1)}}>-</button>
      </div>
    </>
  )
}



export default App