import React from 'react'
import { SearchUser } from '../SearchUser/SearchUser'
import { PopularUserCard } from './PopularUserCard'


const popularUser=[]
export const HomeRight = () => {
  return (
    <div className='pr-5'>
      <SearchUser/>

      <div className='flex justify-between py-5 items-center'>
        <p className='font-semibold opacity-70'>Suggestions for you</p>
        <p className='text-xs font-semibold opacity-95'>View All</p>
      </div>

      <div className='space-y-5'>
        <PopularUserCard />  
      </div>
    </div>
  )
}
