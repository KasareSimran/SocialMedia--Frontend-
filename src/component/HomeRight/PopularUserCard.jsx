import { Avatar, CardHeader, IconButton } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

export const PopularUserCard = () => {
  return (
    <div>
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
    </div>
  )
}
