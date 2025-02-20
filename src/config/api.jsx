// import axios from "axios";

// export const API_BASE_URL = "http://localhost:9545/";

// const jwtToken = localStorage.getItem("jwt") ;

// export const api = axios.create({
//     baseURL: API_BASE_URL,
    
//     headers: {
//         "Authorization": `Bearer ${jwtToken}`,
//         "Content-Type": "application/json", 
//     },
// });


import axios from "axios";

export const API_BASE_URL = "http://localhost:9545/";

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add an interceptor to dynamically set the Authorization header
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwt"); 
        console.log("JWT Token in localStorage:", token);// Get the latest token
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
