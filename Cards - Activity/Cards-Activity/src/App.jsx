import { useState } from 'react'
import Products from './Products'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Products/>
    </>
  )
}

export default App
