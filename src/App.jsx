// npm modules
import { Route, Routes } from "react-router-dom"

// components
import Shop from './pages/Shop/Shop'
import NavBar from './components/NavBar/NavBar'
import MonsterList from "./components/MonsterList/MonsterList"

// css
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/monsters' element={<MonsterList />} />
      </Routes>
    </>
  )
}

export default App
