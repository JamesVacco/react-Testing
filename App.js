import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import List from "./List"
import Clock from "./Clock"

function App(){
  return(
    <div>
      <Clock />
      <Header />
      <List />
    </div>
  )
}

export default App