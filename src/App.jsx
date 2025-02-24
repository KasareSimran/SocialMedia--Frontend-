
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Authentication } from './components/Auth/Authentication'
import { Message } from './components/Message/Message'
import { Home } from './components/HomePage/Home'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProfileAction } from './Redux/Auth/auth.action'
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './theme/DarkTheme'




function App() {
  const dispatch =useDispatch();
  const jwt=localStorage.getItem("jwt");
 const {auth}=useSelector(store=>store);
  useEffect(()=>{
         dispatch(getProfileAction(jwt))
     },[jwt])
 
  
  return (
    <ThemeProvider theme={darkTheme}>
    <Routes>
      <Route path='/*' element={auth.user?<Home/>:<Authentication/>}/>
      <Route path='/message' element={<Message/>}/>
      <Route path='/*' element={<Authentication/>}/>

    </Routes>

    </ThemeProvider>
  )
}

export default App
