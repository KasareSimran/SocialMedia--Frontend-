import { Avatar, Button, CardHeader} from '@mui/material'
import React from 'react'

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
          <Button size='small'>
            Follow
          </Button>
        }
        title="Simran Kasare"
        subheader="@simranKasare"
      />
    </div>
  )
}
