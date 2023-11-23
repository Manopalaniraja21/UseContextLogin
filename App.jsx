import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Registration from './components/Registration/Registration'
import Dashboard from './DashBoard/DashBoard'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
