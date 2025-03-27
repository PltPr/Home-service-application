import axios from "axios";
import {ReservationPost } from "../Models/Reservation";



export const postReservationApi = async (serviceId:number,reservationPost:ReservationPost)=>{
  try{
    const response =await axios.post<ReservationPost>
    (`http://localhost:5173/api/reservation/${serviceId}`,
      reservationPost
    );
    return response.data;
  }catch(error){
    console.error("Post reservation error",error);
    throw error;
  }
}



export const getReservatedDateApi = async(serviceId:number)=>{
  try{
    const response = await axios.get<{date: string}[]>(`http://localhost:5173/api/reservation/${serviceId}`)
    return response.data;
  }catch(err){
    console.error("GetReservatedApi error",err);
    throw err;
    }
 }
