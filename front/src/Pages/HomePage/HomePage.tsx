import React from 'react'
import CardList from '../../Components/CardList/CardList'
import AddCardModal from '../../Components/AddCardModal/AddCardModal'
import { useAuth } from '../../Context/useAuth';




type Props = {}

const HomePage = (props: Props) => {
  const {isAdmin}=useAuth();
  return (
    <div className="bg-gradient-to-b from-gray-200 to-[#666666] min-h-screen flex  justify-center">
    <div className="border border-black bg-white w-full max-w-2xl p-8 rounded-2xl shadow-lg flex flex-col items-center ">
    <h1 className="text-2xl font-bold mt-2 pl-5">Dostępne usługi</h1>
    <CardList />
    {isAdmin() ? <AddCardModal /> : ""}
  </div>
</div>
  )
}

export default HomePage