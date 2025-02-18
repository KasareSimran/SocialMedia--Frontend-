import React from 'react'
import { navigationMenu } from './SidebarNavigation'
import { Divider } from '@mui/material'

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
        <div></div>
      </div>

    </div>
  )
}
