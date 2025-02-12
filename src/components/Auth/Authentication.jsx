import React from 'react'
import {Grid2 }  
    from '@mui/material'; 

export const Authentication = () => {
  return (
    <div>
      <Grid2 container>
        <Grid2 className='h-screen overflow-hidden' item xs={7}>
          <img className='h-full w-full' src='https://img.pikbest.com/origin/09/28/70/08EpIkbEsTcpA.png!w700wp'/>
        </Grid2>
        <Grid2 item xs={5}>
          <div className='px-20 flex flex-col justify-center h-full'>
            <div className='card p-8'>
              <div className='felx flex-col item-center mb-5 space-y-1'>
              <h1 className='log'>SocialMedia App</h1>
              </div>
              

            </div>
          </div>
        </Grid2>
      </Grid2>
    </div>
  )
}
