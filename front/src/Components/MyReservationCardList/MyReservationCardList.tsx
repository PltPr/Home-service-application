import React, { JSX, useEffect, useState } from 'react'
import { getMyReservationsApi } from '../../Api/ReservationService'
import { MyReservationsGet } from '../../Models/Reservation'
import MyReservationCard from '../MyReservationCard/MyReservationCard';

type Props = {}





const MyReservationCardList:React.FC<Props> = (props: Props):JSX.Element => {
    const[reservations,setReservations]=useState<MyReservationsGet[]>([]);
    useEffect (()=>{
        const getData = async()=>{
            const value = await getMyReservationsApi();
            if(value){
                setReservations(value)}
        }
        getData();
    },[])
  return (
    <div>

        {reservations.map((reservation,index)=>(
            <MyReservationCard key={index} reservation={reservation}/>
        ))}

    </div>
  )
}

export default MyReservationCardList