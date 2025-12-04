
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
     <Route path='landing' element={<Landing/>} />

    </Routes>
    </>
  )
}

export default App
