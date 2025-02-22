import { Avatar, Grid } from '@mui/material'
import React from 'react'
import WestIcon from '@mui/icons-material/West';

export const Message = () => {
  return (
    <div>
      <Grid container className='h-screen overflow-y-hidden'>
        <Grid className='px-5' item xs={3}>
          <div className='flex h-full justify-between space-x-2'>
            <div className='w-full '>
            <div className='flex space-x-4 items-center py-5'>
              <WestIcon/>
              <h1 className='text-xl font-bold'>
                Home
              </h1>

            </div>
            <div className='h-[83vh]'>
              <div className=''>
                searchUser
              </div>

              <div className='h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar'>
                   UserChatCard
              </div>

            </div>
            </div>

          </div>
        </Grid>
        <Grid className='h-full' item xs={9}>
          <div>
            <div className='flex justify-between items-center border-1 p-5'>
              <div className='flex items-center space-x-3'>
                <Avatar src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                <p>Simran Kasare</p>

              </div>

            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
