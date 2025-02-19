
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Authentication } from './components/Auth/Authentication'
import { Message } from './components/Message/Message'
import { Home } from './components/HomePage/Home'
import { useSelector } from 'react-redux'


function App() {
 const {auth}=useSelector(store=>store)
  
  return (
    <>
    <Routes>
      <Route path='/*' element={auth.user?<Home/>:<Authentication/>}/>
      <Route path='/message' element={<Message/>}/>
      <Route path='/*' element={<Authentication/>}/>

    </Routes>

    </>
  )
}

export default App
