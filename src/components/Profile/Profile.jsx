import { Avatar, Box, Button, Tab, Tabs } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

export const Profile = () => {

  const { id } = useParams()
  return (
    <div className='py-10 w-[70%]'>

      <div className='rounded-md'>

        <div className='h-[15rem]'>
          <img className='w-full h-full rounded-t-md' src='https://www.oceanclock.com/img/modules/oh_news/news/32_picture.jpg' />
        </div>
        <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
          <Avatar className='transform -translate-y-24' sx={{ width: "10rem", height: "10rem" }}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnriMQPL-HDk20SV09Ollv-oH8hpoiyJEDyQ&s' />

          {true ? <Button sx={{ borderRadius: "20px" }} variant='outlined'>Edit Profile</Button> : <Button variant='outlined'>Follow</Button>}
        </div>

        <div className='p-5'>
        <div>
          <h1 className='py-1 front-bold text-xl'>Simran Kasare</h1>
          <p>@simranKasare</p>
        </div>

        <div className='flex gap-5 items-center py-3'>
          <span>41 posts</span>
          <span>35 followers</span>
          <span>5 following</span>
        </div>

        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

         </div>
         <section>
         <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
          wrapped
        />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
         </section>
       </div>
    </div>
  )
}
