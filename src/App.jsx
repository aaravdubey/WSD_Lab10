import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Property from './components/properties'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Property />
    </>
  )
}

export default App
