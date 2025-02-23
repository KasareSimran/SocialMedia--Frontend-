import { Avatar, Card, CardHeader } from '@mui/material'
import React, { useState } from 'react'

export const SearchUser = () => {

  const [userName,setUserName]=useState();

  const handleSearchUser=(e)=>{
    setUserName(e.target.value)
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

{userName && (
        <Card className='absolute w-full z-10 top-[4.5rem] cursor-pointer'>
          <CardHeader onClick={()=>{
            handleClick()
            setUserName("");
          }}
          avatar={<Avatar src='https://cdn.pixabay.com/photo/2025/02/11/16/41/swans-9399436_1280.jpg'/>}
          title='Simran Kasare'
          subheader={"simrankasare"}

          />

  

        </Card>
      )}
      </div>


     

    </div>
  )
}
