import { api } from "../../config/api"
import { CREATE_CHAT_REQUEST, CREATE_MESSAGE_FAILURE, CREATE_MESSAGE_REQUEST, CREATE_MESSAGE_SUCCESS,CREATE_CHAT_FAILURE,CREATE_CHAT_SUCCESS, GET_ALL_CHATS_REQUEST, GET_ALL_CHATS_SUCCESS, GET_ALL_CHATS_FAILURE } from "./message.actionType"


export const createMessage=(message)=>async(dispatch)=>{
    dispatch({type:CREATE_MESSAGE_REQUEST})
    try{
        const {data}=await api.post(`api/message`,message);

        console.log("created message ",data)

        dispatch({type:CREATE_MESSAGE_SUCCESS,payload:data})

    }catch(error){
        console.log("catch error...",error)
        dispatch({type:CREATE_MESSAGE_FAILURE,payload:error})
    }

};

export const createChat=(chat)=>async(dispatch)=>{
    dispatch({type:CREATE_CHAT_REQUEST})
    try{
        const {data}=await api.post(`api/chats`,chat);

        console.log("created Chat ",data)

        dispatch({type:CREATE_CHAT_SUCCESS,payload:data})

    }catch(error){
        console.log("catch error...",error)
        dispatch({type:CREATE_CHAT_FAILURE,payload:error})
    }
};


export const getAllChats=(message)=>async(dispatch)=>{
    dispatch({type:GET_ALL_CHATS_REQUEST})
    try{
        const {data}=await api.post(`api/chats/user`,message);

        console.log("get all chats ",data)

        dispatch({type:GET_ALL_CHATS_SUCCESS,payload:data})

    }catch(error){
        console.log("catch error...",error)
        dispatch({type:GET_ALL_CHATS_FAILURE,payload:error})
    }
};