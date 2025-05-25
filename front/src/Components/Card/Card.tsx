import React, { JSX } from 'react'
import { Link } from 'react-router-dom';
import "./Card.css"
import { deleteOfferApi } from '../../Api/OffersService';
import { toast } from 'react-toastify';
import { useAuth } from '../../Context/useAuth';

interface Props  {
    id:number;
    name:string
}



const Card:React.FC<Props> = ({id,name}: Props):JSX.Element => {
  const {isAdmin}=useAuth();
const handleDelete=async()=>{
  try{
    await deleteOfferApi(id);
    window.location.reload();
    toast.success("Offer deleted successfully");
  }catch(err:any){
    toast.warning("Failed to delete: ",err)
    console.log(id);
  }
}

  return (
    <div className='flex justify-baseline items-center'>
    <div className='bg-gray-300 flex m-10  justify-between border-2 border-black min-w-[300px]'>
    <h1 className='text-center m-5 p-3 border border-black bg-white'>{name}</h1>
    <Link to={`/order-page/${id}`}className='border border-black flex items-center justify-center bg-white w-auto px-5 my-5 rounded-s-2xl'>
    order service
    </Link>
    </div>
    {isAdmin()?(
    <h1 onClick={handleDelete} className=" cursor-pointer h-10 border border-black bg-red-500 flex items-center justify-center bg-white w-auto px-5 my-5 rounded">
        X
    </h1>
    ):("")
    }
    </div>
  )
}

export default Card