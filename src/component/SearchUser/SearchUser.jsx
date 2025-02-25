import { Avatar, Card, CardHeader } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../../Redux/Auth/auth.action';
import { createChat } from '../../Redux/Message/message.action';

export const SearchUser = () => {

  const [userName, setUserName] = useState();
  const dispatch = useDispatch();
  const { message ,auth} = useSelector(store => store);


  const handleSearchUser = (e) => {
    setUserName(e.target.value)
    console.log("search user...")
    dispatch(searchUser(userName))
  }

  const handleClick = (id) => {
    dispatch(createChat({userId:id}))
 
  }

  return (
    <div>
      <div className='py-5 relative'>
        <input className='bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full'
          placeholder='search user...'
          onChange={handleSearchUser}
          type='text' />

        {userName && (
          auth.searchUser.map((item) => <Card key={item.id} className='absolute w-full z-10 top-[4.5rem] cursor-pointer'>
            <CardHeader onClick={() => {
              handleClick(item.id)
              setUserName("");
            }}
              avatar={<Avatar src='https://cdn.pixabay.com/photo/2025/02/11/16/41/swans-9399436_1280.jpg' />}
              title={item.firstName+" "+item.lastName}
              subheader={item.firstName.toLowerCase()+""+item.lastName.toLowerCase()}

            />
          </Card>)
        )}
      </div>




    </div>
  )
}
