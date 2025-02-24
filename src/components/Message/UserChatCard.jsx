

import { Avatar, Card, CardHeader, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react'
import { useSelector } from 'react-redux';

export const UserChatCard = ({chat}) => {
     const { message, auth } = useSelector(state => ({
        message: state.message,
        auth: state.auth
      }));
  return (
    <Card>
            <CardHeader 
     avatar={  <Avatar sx={{width:"3.5rem",height:"3.5rem", fontSize:"1.5rem",bgcolor:"#191c29",color:"rgb(88,199,250)"
    }} src='https://cdn.pixabay.com/photo/2022/02/13/11/26/grass-7010936_1280.jpg'/>   }

    action={
        <IconButton>
            <MoreHorizIcon/>
        </IconButton>
    }
    title={auth.user.id===chat.users[0].id?chat.users[1].firstName+" "+chat.users[1].lastName
        :chat.users[0].firstName+" "+chat.users[0].lastName}
    subheader={"new message"}
         >
  
    </CardHeader>

    </Card>

  )
}