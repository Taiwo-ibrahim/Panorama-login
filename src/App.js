import React from "react"
import SignUp from "./SignUp"
import Welcome from "./Welcome"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<SignUp/>} />
        <Route path="/Welcome" element= {<Welcome/>} />
      </Routes>
    </Router>
  )
}

export default App