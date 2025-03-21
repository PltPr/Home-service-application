import { OffersGet } from "../Models/Offers"
import axios from "axios";

export const getOfferApi = async()=>{
    try{
        const response = await axios.get<OffersGet[]>("http://localhost:5173/api/service");
        return response.data;
    }catch(err){
        console.error("Error fetching offers:", err);
        return null;
    }
}