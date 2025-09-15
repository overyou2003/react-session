import { useState , useEffect } from "react"
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

  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light")

  function deleteUser(id) {
    setData(data.filter((user)=>user.id!==id))
  }

  useEffect(()=> {
    localStorage.setItem("mode" , theme)
  },[theme])
  return (
    <div className={theme}>
    <div className={'app'}>
      <Header title="Dreams" theme={theme} setTheme={setTheme}/>
      <main>
        <Addform data={data} setData={setData} theme={theme} setTheme={setTheme}  />
        <Personlist data={data} deleteUser={deleteUser} setTheme={setTheme} theme={theme}/>
      </main>
    </div>
    </div>
  
  )
}



export default App
