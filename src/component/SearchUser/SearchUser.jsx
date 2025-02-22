import { Avatar, Card, CardHeader } from '@mui/material'
import React from 'react'

export const SearchUser = () => {

  const handleSearchUser=()=>{
    console.log("search user...")
  }

  const handleClick=(id)=>{
    console.log(id)
  }

  return (
    <div>
      <div className='py-5 relative'>
        <input className='bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full' 
        placeholder='search user...'
        onChange={handleSearchUser}
         type='text'/>
      </div>


      {
        false && <Card>
          <CardHeader onClick={()=>{
            handleClick()
          }}
          avatar={<Avatar src='https://cdn.pixabay.com/photo/2025/02/11/16/41/swans-9399436_1280.jpg'/>}
          title='Simran Kasare'
          subheader={"simrankasare"}

          />

  

        </Card>
      }

    </div>
  )
}
