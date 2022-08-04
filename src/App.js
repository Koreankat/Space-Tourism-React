import "./App.css"
import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/home"
import Navbar from "./components/NavBar/navbar"
import Crew from "./components/Crew/crew"
import Destination from "./components/Destination/destination"
import Technology from "./components/Technology/technology"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
