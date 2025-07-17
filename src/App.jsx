import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Officers from './pages/Officers'
import Join from './pages/Join'

function App() {

  // All pages are broken into components, find the component that corresponds with your page and work on it!!

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <Home />

      <About />

      <Events />

      <Officers />

      <Join />

    </div>
  )
}

export default App
