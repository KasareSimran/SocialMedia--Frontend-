import { Avatar, Card, CardHeader, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'

export const PostCard = () => {
  return (
    <Card className=''>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

    </Card>
  )
}
