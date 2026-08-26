import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Envelope3 from './components/Envelope3'
import Invitation3 from './pages/Invitation3'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Envelope3/>}/>
        <Route path='/prabhat-sir-invitation' element={<Invitation3/>}/>
      </Routes>
    </>
  )
}

export default App
