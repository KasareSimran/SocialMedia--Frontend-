import axios from "axios"
import { API_BASE_URL } from "../../config/api"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS ,REGISTER_SUCCESS,REGISTER_REQUEST,REGISTER_FAILURE} from "./auth.actionType"

export const loginUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const{data}=await axios.post(`${API_BASE_URL}/auth/signin`,loginData.data)

        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
        }
        console.log("Login in success",data)
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
    }
    catch(error){

        console.log("-------------------",error)
        dispatch({type:LOGIN_FAILURE,payload:error})
    }

}   



export const registerUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        const{data}=await axios.post(`${API_BASE_URL}/auth/signup`,loginData.data)

        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
        }
        console.log("Register",data)
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
    }
    catch(error){

        console.log("-------------------",error)
        dispatch({type:REGISTER_FAILURE,payload:error})
    }

}  