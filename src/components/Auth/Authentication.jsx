import React from 'react'
import {Grid2} from '@mui/material'; 
import Card from '@mui/material/Card';
import { Login } from './Login';

export const Authentication = () => {
  return (
    <div>
      <Grid2 container>
        <Grid2 className='h-screen overflow-hidden' item xs={7}>
          <img className='h-full w-full' src='https://img.pikbest.com/origin/09/28/70/08EpIkbEsTcpA.png!w700wp'/>
        </Grid2>
        <Grid2 item xs={5}>
          <div className='px-20 flex flex-col justify-center h-full'>
            <Card className='card p-1'>
              <div className='felx flex-col item-center mb-5 space-y-1'>
              <h1 className='logo text-center'>SocialMedia</h1>
              <p className='text-center text-sm w-[70&]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <Login/>
            </Card>
          </div>
        </Grid2>
      </Grid2>
    </div>
  )
}
