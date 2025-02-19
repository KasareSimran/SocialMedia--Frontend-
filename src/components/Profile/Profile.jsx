import { Avatar, Box, Button, Card, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostCard } from '../../component/Post/PostCard';
import { UserReelCard } from '../../component/Reels/UserReelCard';
import { useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';


const tabs=[
  {value:"post" ,name:"Post"},
  {value:"reels" ,name:"Reels"},
  {value:"saved" ,name:"Saved"},
  {value:"repost" ,name:"Repost"}
]
const posts=[1,1,1];
const reels=[1,1];
const savedPost=[1,1,1];
export const Profile = () => {
  const [open,setOpen]=useState(false);
  const handleOpenProfileModal=()=>setOpen(true);
  const handleClose=()=>setOpen(false);

  
  const {auth} =useSelector(store=>store);
  const [value, setValue] = useState('post');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { id } = useParams();
  return (
    <Card className='my-10 w-[70%]'>

      <div className='rounded-md'>

        <div className='h-[15rem]'>
          <img className='w-full h-full rounded-t-md' src='https://www.oceanclock.com/img/modules/oh_news/news/32_picture.jpg' />
        </div>
        <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
          <Avatar className='transform -translate-y-24' sx={{ width: "10rem", height: "10rem" }}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnriMQPL-HDk20SV09Ollv-oH8hpoiyJEDyQ&s' />

          {true ? <Button sx={{ borderRadius: "20px" }} variant='outlined' onClick={handleOpenProfileModal}>Edit Profile</Button> : <Button variant='outlined'>Follow</Button>}
        </div>

        <div className='p-5'>
        <div>
          <h1 className='py-1 front-bold text-xl'>{auth.user?.firstName+" "+auth.user?.lastName}</h1>
          <p>@{auth.user?.firstName.toLowerCase()+""+auth.user?.lastName.toLowerCase()}</p>
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
         <Box sx={{ width: '100%',borderBottom:1,borderColor:"divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >

        
        {tabs.map((item)=><Tab value={item.value} label={item.name} wrapped /> )}
      </Tabs>
    </Box>
    <div className='flex justify-center'>
      {value==="post"?
      <div className='space-y-5 w-[70%] my-10'>
        {posts.map((item)=>
        <div className='border border-slate-100 rounded-md'><PostCard/></div>)}
      </div>

      :value==="reels"?
      <div className='flex justify-center flex-wrap gap-2 my-10'> 
        {reels.map((item)=><UserReelCard/>)}
      </div>

      :value==="saved"?
      <div className='space-y-5 w-[70%] my-10'>
        {savedPost.map((item)=>
        <div className='border border-slate-100 rounded-md'><PostCard/></div>)}
      </div>:(
        <div>
          Repost
        </div> 
      )}

    </div>
         </section>
       </div>
       <section>
        <ProfileModal open={open} handleClose={handleClose}/>
       </section>
    </Card  >
  )
}
