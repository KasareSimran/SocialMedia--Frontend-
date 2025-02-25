import axios from "axios"
import { api, API_BASE_URL } from "../../config/api"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS ,REGISTER_SUCCESS,REGISTER_REQUEST,REGISTER_FAILURE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE, SEARCG_USER_REQUEST, SEARCG_USER_SUCCESS, SEARCG_USER_FAILURE} from "./auth.actionType"

export const loginUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const{data}=await axios.post(`${API_BASE_URL}auth/signin`,loginData.data)

        if(data.token){
            localStorage.setItem("jwt",data.token)
        }
        console.log("Login is success",data)
        dispatch({type:LOGIN_SUCCESS,payload:data.token})
    }
    catch(error){

        console.log("-------------------",error)
        dispatch({type:LOGIN_FAILURE,payload:error})
    }

}   



export const registerUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        const{data}=await axios.post(`${API_BASE_URL}auth/signup`,loginData.data)

        if(data.token){
            localStorage.setItem("jwt",data.token)
        }
        console.log("Register",data)
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
    }
    catch(error){

        console.log("-------------------",error)
        dispatch({type:REGISTER_FAILURE,payload:error})
    }

}  


export const getProfileAction=(jwt)=>async(dispatch)=>{
    dispatch({type:GET_PROFILE_REQUEST})
    try{
        const{data}=await api.get(`${API_BASE_URL}api/users/profile`,
        {
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        }

        )

        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
        }
        console.log("Profile..",data)
        dispatch({type:GET_PROFILE_SUCCESS,payload:data})
    }
    catch(error){

        console.log("-------------------",error)
        dispatch({type:GET_PROFILE_FAILURE,payload:error})
    }

}  


export const updateProfileAction=(reqData)=>async(dispatch)=>{
    dispatch({type:UPDATE_PROFILE_REQUEST})
    try{
        const{data}=await api.put(`${API_BASE_URL}api/users`,reqData)

        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
        }
        console.log("Profile..",data)
        dispatch({type:UPDATE_PROFILE_SUCCESS,payload:data.jwt})
    }
    catch(error){

        console.log("-------------------",error)
        dispatch({type:UPDATE_PROFILE_FAILURE,payload:error})
    }

} 



export const searchUser=(query)=>async(dispatch)=>{
    dispatch({type:SEARCG_USER_REQUEST})
    try{
        const{data}=await api.get(`api/users/search?query=${query}`)
  
        console.log("search user...",data)
        dispatch({type:SEARCG_USER_SUCCESS,payload:data})
    }
    catch(error){

        console.log("-------------------",error)
        dispatch({type:SEARCG_USER_FAILURE,payload:error})
    }

}  
