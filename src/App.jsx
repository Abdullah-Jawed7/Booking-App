import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import './App.css'
import Home from './pages/home/Home.jsx'
import List from './pages/list/List.jsx'
import Hotel from "./pages/hotel/Hotel.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<List/>}/>
    <Route path="/" element={<Hotel/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
