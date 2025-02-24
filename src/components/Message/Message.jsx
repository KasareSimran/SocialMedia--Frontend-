import { Avatar, Backdrop, CircularProgress, Grid, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { SearchUser } from '../../component/SearchUser/SearchUser';
import { UserChatCard } from './UserChatCard';
import { ChatMessage } from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage, getAllChats } from '../../Redux/Message/message.action';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { uploadToCloudnary } from '../../utils/uploadToCloudnary';

export const Message = () => {
  const dispatch = useDispatch();
  const { message, auth } = useSelector(store => store);
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const [loading, setLoading] = useState(false);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    dispatch(getAllChats())

  }, [])

  console.log("chats.....", message.chats)

  const handleSelectImgae = async (e) => {
    setLoading(true);
    console.log("hande select image...")
    const imgUrl = await uploadToCloudnary(e.target.files[0], "image")
    setSelectedImage(imgUrl)
    setLoading(false);
  }

  const handleCreateMessage = (value) => {
    const message = {
      chatId: currentChat?.id,
      content: value,
      image: selectedImage
    };
    dispatch(createMessage(message))
  }


  useEffect(() => {
    setMessages([...messages, message.message])

  }, [message.message])


  return (
    <div>
      <Grid container className='h-screen overflow-y-hidden'>
        <Grid className='px-5' item xs={3}>
          <div className='flex h-full justify-between space-x-2'>
            <div className='w-full '>
              <div className='flex space-x-4 items-center py-5'>
                <WestIcon />
                <h1 className='text-xl font-bold'>
                  Home
                </h1>

              </div>
              <div className='h-[83vh]'>
                <div className=''>
                  <SearchUser />
                </div>

                <div className='h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar'>
                  {
                    message.chats.map((item) => {
                      return <div onClick={() => {
                        setCurrentChat(item);
                        setMessages(item.messages);
                      }}>
                        <UserChatCard chat={item} />
                      </div>

                    })
                  }

                </div>

              </div>
            </div>

          </div>
        </Grid>
        <Grid className='h-full' item xs={9}>
          {currentChat ? <div>
            <div className='flex justify-between items-center border border-gray-300 p-5'>
              <div className='flex items-center space-x-3'>
                <Avatar src='https://cdn.pixabay.com/photo/2022/02/13/11/26/grass-7010936_1280.jpg' />
                <p>{auth.user?.id === currentChat.users[0]?.id ? currentChat.users[1].firstName + " " + currentChat.users[1].lastName
                  : currentChat.users[0].firstName + " " + currentChat.users[0].lastName}</p>

              </div>
              <div className='flex space-x-3 '>
                <IconButton>
                  <AddIcCallIcon />
                </IconButton>
                <IconButton>
                  <VideoCallIcon />
                </IconButton>

              </div>

            </div>

            <div className='hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5'>
              {messages.map((item) => <ChatMessage item={item} />)}
            </div>
            <div className='sticky bottom-0 border border-gray-300'>
              {selectedImage && <img className="w-[5rem] h-[5rem] object-cover px-2"
                src={selectedImage} />}

              <div className='py-5 flex items-center justify-center space-x-5'>

                <input
                  value={messageInput} // Controlled input
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && messageInput.trim()) {
                      handleCreateMessage(messageInput);
                      setMessageInput("");
                      setSelectedImage("");
                    }
                  }}
                  className='bg-transparent border border-[#3b40544] rounded-full w-[90%] py-3 px-5'
                  placeholder='Type message...'
                  type='text'
                />
                <div>
                  <input type='file'
                    accept='image/*'
                    onChange={handleSelectImgae}
                    className='hidden'
                    id='image-input' />
                  <label htmlFor='image-input'>
                    <AddPhotoAlternateIcon />
                  </label>
                </div>

              </div>

            </div>
          </div> :
            <div className='h-full space-y-5 flex flex-col justify-center items-center'>
              <ChatBubbleOutlineIcon sx={{ fontSize: "15rem " }} />
              <p className='text-xl fonr-semibold'>No Chat Selected</p>

            </div>
          }


        </Grid>
      </Grid>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}

      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}
