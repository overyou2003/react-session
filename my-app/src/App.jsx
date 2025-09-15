import { useState } from "react"
import Header from "./components/Header"
import Personlist from "./components/Personlist"
import "./App.css"

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Dreams", gender: "Male" },
    { id: 2, name: "Pleng", gender: "Female" },
    { id: 3, name: "Begle", gender: "Female" },
    { id: 4, name: "Jiw", gender: "Female" },
  ]);
  return (
    <div className="app">
      <Header title="Dreams"/>
      <main>
        <Personlist data={data}/>
      </main>
    </div>
  
  )
}

export default App
