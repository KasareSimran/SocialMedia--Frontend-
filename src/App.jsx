
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Authentication } from './components/Auth/Authentication'
import { Message } from './components/Message/Message'
import { Home } from './components/HomePage/Home'


function App() {
  
  return (
    <>
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='/message' element={<Message/>}/>
      <Route path='/*' element={<Authentication/>}/>

    </Routes>

    </>
  )
}

export default App
