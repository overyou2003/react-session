import { useState } from "react"

function App() {
  const [data,setData] = useState([
    {id:1 , name:"Dreams" , gender:"Male"},
    {id:2 , name:"Pleng" , gender:"Female"},
    {id:3 , name:"Begle" , gender:"Female"}
  ])

  const [show,setShow] = useState(true)
  console.table(data)
  return (
    <>
      <h1>People : {data.length} pcs</h1>
      <button onClick={()=> setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ul>
        {show && data.map((element)=>(
          <li key={element.id}>{element.name} | {element.gender}</li>
        ))}
      </ul>
    </>
  
  )
}

export default App
