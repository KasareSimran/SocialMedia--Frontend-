import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react'
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentAction, likePostAction } from '../../Redux/Post/post.action';
import { isLikeByReqUser } from '../../utils/isLikeByReqUser';



export const PostCard = ({item}) => {
  if (!item || !item.user) return null;
  const [showComments,setShowComments]=useState(false);
  const dispatch=useDispatch();
  const {post,auth}=useSelector(store=>store);

  const handleShowComment=()=>setShowComments(!showComments);

  const handleCreateComment=(content)=>{
    const reqData={
      postId:item.id,
      data:{
        content
      }
    }
    dispatch(createCommentAction(reqData))
}

  const handleLikePost=()=>{
    dispatch(likePostAction(item.id))
  }
  




  return (
    <Card className=''>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.user.firstName+" "+item.user.lastName}
        subheader={'@'+item.user.firstName.toLowerCase()+""+item.user.lastName.toLowerCase()}
      />
       {/* <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Paella dish"
      /> */}

      <img className='w-full max-h-[25rem] object-cover object-top' src={item.image}/>

     <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.caption}
        </Typography>
      </CardContent>


      <CardActions className='flex justify-between' disableSpacing>
        <div>
            <IconButton onClick={handleLikePost}>
                {isLikeByReqUser(auth?.user?.id, item)?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>

            <IconButton>
                {<ShareIcon/>}
            </IconButton>

            <IconButton onClick={handleShowComment}>
                {<ChatBubbleIcon/>}
            </IconButton>
        </div>

        <div>
            <IconButton>
            {true?<BookmarkIcon/>:<BookmarkBorderIcon/>}
            </IconButton>   
        </div>

      </CardActions>

     {showComments && <section>
        <div className='flex item-center space-x-5 mx-3 my-5'>
          <Avatar sx={{}}/>
          <input onKeyPress={(e)=>{
            if(e.key=="Enter"){
              handleCreateComment(e.target.value)
              console.log('enter pressed.....',e.target.value)
            }
          }}
          className='w-full outline-none bg-transparent border border-[#3b4050] rounded-full px-5 py-2' 
          type='text'
           placeholder='write your comment...'/>
        </div>
        <Divider/>

        <div className='mx-3 space-y-2 my-5 text-xs'>

           { item.comments?.map((comment)=>
           <div className='flex items-center space-x-5'>
              <Avatar sx={{height:"2rem",width:"2rem",fontSize:".8rem"}}>
                {comment.user.firstName[0]}
              </Avatar>
              <p>{comment.content}</p>

            </div>)}
          

        </div>
      </section>}

    </Card>
  )
}
