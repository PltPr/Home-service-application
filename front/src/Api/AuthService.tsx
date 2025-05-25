import axios from "axios"
import { UserProfileToken } from "../Models/User";

export const loginAPI = async(email:string,password:string)=>{
    try{
        const data = await axios.post<UserProfileToken>(`https://homeserviceapi-angeg8f8gqebh8b3.polandcentral-01.azurewebsites.net/api/account/login`,{
            email:email,
            password:password
        });
        return data;
    }catch(error){
        console.error("Something went wrong", error)
        throw error;
    }
}

export const registerAPI = async(email:string,password:string)=>{
    try{
        const data = await axios.post<UserProfileToken>(`https://homeserviceapi-angeg8f8gqebh8b3.polandcentral-01.azurewebsites.net/api/account/register`,{
            email:email,
            password:password
        });
        return data;
    }catch(error){
        console.error("Something went wrong", error);
        throw error;
    }
}