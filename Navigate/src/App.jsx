import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigate from './component/Navigate/Navigate'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigate />

    </>
  )
}

export default App
