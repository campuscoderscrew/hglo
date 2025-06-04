import { useState, useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    fetch('http://localhost:5000/test').then((res) => res.json().then((data) => console.log(data)))
  }, []);

  return (
    <>
      <h1 className="text-3x1 font-bold underline">
        Hello World!
      </h1>
    </>
  )
}

export default App
