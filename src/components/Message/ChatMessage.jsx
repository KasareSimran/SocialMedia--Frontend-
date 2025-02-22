import React from 'react'

export const ChatMessage = () => {
  return (
    <div className={`flex ${true?"justify-start" :"justify-end"} text-white`}>
        <div className={`p-1 ${true?"rounded-md":"px-5 rounded-full"} bg-[#191c29]`}>
            {true && <img className='w-[12rem] h-[17rem] object-cover rounded-md' src='https://cdn.pixabay.com/photo/2025/02/11/16/41/swans-9399436_1280.jpg'/>}
            <p className={`${true?"py-2":"py-1"}`}>
                message
            </p>
        </div>
    </div>
  )
}