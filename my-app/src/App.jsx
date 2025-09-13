import { useState } from "react"
import Header from "./components/Header"
import Personlist from "./components/Personlist"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header/>
      <main>
        <Personlist/>
      </main>
    </div>
  
  )
}

export default App
