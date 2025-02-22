

import { Avatar, CardHeader } from '@mui/material'
import React from 'react'

export const UserChatCard = () => {
  return (
    
    <CardHeader>
        <Avatar sx={{width:"3.5rem",height:"3.5rem", fontSize:"1.5rem",bgcolor:"#191c29",color:"rgb(88,199,250)"
        }} src='https://cdn.pixabay.com/photo/2022/02/13/11/26/grass-7010936_1280.jpg'/>   
    </CardHeader>
  )
}