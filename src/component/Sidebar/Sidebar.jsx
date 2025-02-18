import React from 'react'
import { navigationMenu } from './SidebarNavigation'
import { Avatar, Divider } from '@mui/material'

export const Sidebar = () => {
  return (
    <div className='card h-screen flex flex-col justify-between py-5'>

      <div className='space-y-8 pl-5'>

        <div className=''>
        {/* junction a hub where conversations and ideas intersect. */}
          <span className='logo font-bold text-xl'>Junction</span> 
        </div>
        <div className='space-y-8'>
          {navigationMenu.map((item)=> <div className='cursor-pointer flex space-x-3 items-center'>
            {item.icon}
            <p className='text-xl'>{item.title}</p>
          </div>)}
        </div>

      </div>

      <div>
        <Divider/>
        <div className='pl-5 flex item-center justify-betwwen pt-5'>
          <div className='flex items-center space-x-3'>
          {/* https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png */}
            <Avatar src='.'/>
            <div>
              <p className='font-bold'>Simran Kasare</p>
              <p className='opacity-70'>@simranKasare</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
