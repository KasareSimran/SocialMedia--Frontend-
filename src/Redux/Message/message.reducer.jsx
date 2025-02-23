import {  CREATE_CHAT_SUCCESS,CREATE_MESSAGE_SUCCESS,  GET_ALL_CHATS_SUCCESS } from "./message.actionType"



const initialState={
    messages:[],
    chats:[],
    loading:false,
    error:null,
    message:null

}


export const messageReducer=(state=initialState,action)=>{
    switch(action.type){
        // case CREATE_MESSAGE_REQUEST:
        // case GET_ALL_CHATS_REQUEST:
        // case CREATE_CHAT_REQUEST:
        //     return{...state,error:null,loading:false}   
         
        case CREATE_MESSAGE_SUCCESS:
            return{...state,message:action.payload}

        case GET_ALL_CHATS_SUCCESS:
            return{...state,chats:action.payload}    

        case CREATE_CHAT_SUCCESS:
            return{...state,chats:[action.payload,...state.chats] }    
 
            
        // case CREATE_CHAT_FAILURE:
        // case GET_ALL_CHATS_FAILURE:
        // case CREATE_MESSAGE_FAILURE:     
        //     return{...state,error:action.payload,loading:false}  
            
            

        default:
            return state;    
    }

}