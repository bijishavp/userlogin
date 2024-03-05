import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonRequest";



// posting User registration details


export const addUserdetails=async(body)=>{
   
   return await commonRequest("POST",`${BASE_URL}/users`,body)
}

//get user details

export const getUserdetails=async()=>{
    return await commonRequest("GET",`${BASE_URL}/users`,"")
}
