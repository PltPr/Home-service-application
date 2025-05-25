import React from 'react'
import MyReservationCardList from '../../Components/MyReservationCardList/MyReservationCardList'

type Props = {}

const MyReservationsPage = (props: Props) => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-[#666666] min-h-screen flex justify-center">
    <div className="h-auto border border-black bg-white w-full max-w-2xl p-8 rounded-2xl shadow-lg flex flex-col items-center ">
    <h1 className="text-2xl font-bold mt-2 pl-5 mb-5">My reservations</h1>  
    <MyReservationCardList/>
    </div>
    </div>
  )
}

export default MyReservationsPage