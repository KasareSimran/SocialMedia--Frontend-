import React from 'react'

export const ChatMessage = () => {
  return (
    <div>
        <div className={`p-1 ${true?"rounded-md":"px-5 rounded-full"} bg-[#191c29]":"bg-[#19]"`}>
            <p className={`${true?"py-2":"py-1"}`}>message</p>
        </div>
    </div>
  )
}