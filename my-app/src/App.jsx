import { useState } from "react"
import Header from "./components/Header"
import Personlist from "./components/Personlist"
import Addform from "./components/Addform"
import "./App.css"

function App() {
  const [data, setData] = useState([
    // { id: 1, name: "Dreams", gender: "Male" },
    // { id: 2, name: "Pleng", gender: "Female" },
    // { id: 3, name: "Begle", gender: "Female" },
    // { id: 4, name: "Jiw", gender: "Female" },
  ]);

  function deleteUser(id) {
    setData(data.filter((user)=>user.id!==id))
  }
  return (
    <div className="app">
      <Header title="Dreams"/>
      <main>
        <Addform data={data} setData={setData}/>
        <Personlist data={data} deleteUser={deleteUser}/>
      </main>
    </div>
  
  )
}



export default App
