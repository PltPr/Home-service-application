import { OffersGet, OffersPost } from "../Models/Offers"
import axios from "axios";

export const getOfferApi = async()=>{
    try{
        const response = await axios.get<OffersGet[]>("https://homeserviceapi-angeg8f8gqebh8b3.polandcentral-01.azurewebsites.net/api/service");
        return response.data;
    }catch(err){
        console.error("Error fetching offers:", err);
        return null;
    }
}

export const postOfferApi = async (offer: OffersPost) => {
    try {
        const response = await axios.post("https://homeserviceapi-angeg8f8gqebh8b3.polandcentral-01.azurewebsites.net/api/service", offer);
        return response.data; 
    } catch (err) {
        console.error("Error posting offer:", err);
        return null; 
    }
}

export const deleteOfferApi = async(id:number)=>{
    try{
        const response = await axios.delete(`https://homeserviceapi-angeg8f8gqebh8b3.polandcentral-01.azurewebsites.net/api/service`,{
            params:{id}
        });
        return response.data;
    }catch(err){
        console.error("deleteOfferApi Error");
        throw err;
    }
}

export const getNameById = async(serviceId:number)=>{
    try{
        const response = await axios.get<{name:string}>(`https://homeserviceapi-angeg8f8gqebh8b3.polandcentral-01.azurewebsites.net/api/service/${serviceId}`,{
            params:{serviceId}
        });
        return response.data;
    }catch(err){
        console.error("getOfferByIdApi Error");
        throw err;
    }
}
