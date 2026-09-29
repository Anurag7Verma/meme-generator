import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import  "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './Pages/Home.jsx'
import EditPage from './Pages/Edit.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid min-vh-100" style={{background : "#f5f5f5"}}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Edit" element={<EditPage/>}/>
      </Routes>
    </div>
  )
}

export default App
