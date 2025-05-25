import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import { getReservatedDateApi, postReservationApi } from '../../Api/ReservationService';
import { useParams } from 'react-router-dom';
import { parseISO } from 'date-fns';
import { getNameById } from '../../Api/OffersService';



type Props = {};

const ReservePage = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const[address,setAddress]=useState<string>("");
  const {serviceId}=useParams<{serviceId:string}>();
  const[reservatedDate,setReservatedDate]=useState<{date: string}[]>([])
  const serviceIdNumber = Number(serviceId);
  const[name,setName]=useState<string|null>("");
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  
useEffect(()=>{
  const GetData=async()=>{
  try{
    const response = await getNameById(serviceIdNumber)
    if(response?.name)setName(response.name);
  }catch(err){
    console.log("Can't get service name");
  }}
  GetData();
},[])

useEffect(()=>{
  const GetData= async()=>{
    try{
      const response = await getReservatedDateApi(serviceIdNumber)
      if(response){setReservatedDate(response);}
      
  }catch(err){
      console.log("GetReservatedDate error",err)
  }
  }
  GetData();
},[serviceIdNumber])
console.log(reservatedDate)
  const handleAddressChange =(event:any)=>{
    setAddress(event.target.value);
  }

  const handleReservation = async(event:any)=>{
    event.preventDefault();
    if(!selectedDate||!address) {toast.warning("Fill data");return;}
    const formattedDate = selectedDate.toISOString().slice(0, 19);

    var resObj ={
      date:formattedDate,
      address:address
    }
    try{
      postReservationApi(serviceIdNumber,resObj)
      toast.success("Reservation successfully added!")
    }catch(err){
      toast.warning("Something went wrong");
    }
  }
  


  const formatDate = (date: Date | null) => {
    if (!date) return 'No date selected';
    return date.toLocaleString('pl-PL', { // Ustawiamy lokalizację na Polskę
      weekday: 'long',  // Dzień tygodnia
      year: 'numeric',
      month: 'long',    // Pełna nazwa miesiąca
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,    // 24-godzinny format
    });
  };

  // Funkcja do generowania listy godzin dla danego dnia
  const getExcludedTimesForDate = (date: Date) => {
    const excludedTimes: Date[] = [];

    // Iteracja po zarezerwowanych dniach i godzinach
    reservedDate.forEach((reservedDate) => {
      if (reservedDate.toDateString() === date.toDateString()) {
      

        const plusFourHours = new Date(reservedDate);
      plusFourHours.setHours(plusFourHours.getHours() + 4);
      excludedTimes.push(plusFourHours);
      }
    });

    return excludedTimes;
  };

  const [excludeTimes, setExcludeTimes] = useState<Date[] | undefined>(undefined);

  // Zmiana wykluczonych godzin po wybraniu daty
  useEffect(() => {
    if (selectedDate) {
      const timesToExclude = getExcludedTimesForDate(selectedDate);
      setExcludeTimes(timesToExclude);
    }
  }, [selectedDate]);

  

  const reservedDate = reservatedDate.map(item => 
    {
      return parseISO(item.date);
    })

    return (
      <div className="bg-gradient-to-b from-gray-200 to-[#666666] min-h-screen flex items-center justify-center">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-black">
          <h1 className="text-2xl font-bold text-center mb-6">Reserve Page</h1>
          <h1 className="text-xl font-bold text-center mb-6">{name}</h1>
    
          <form onSubmit={handleReservation} className="space-y-4">
            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-1">
                Enter Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
                placeholder="Enter address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
    
            <div>
              <label
                htmlFor="reservationDateTime"
                className="block text-sm font-medium mb-1"
              >
                Choose a date and time
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="yyyy-MM-dd'T'HH:mm"
                timeFormat="HH:mm"
                timeIntervals={120}
                minDate={new Date()}
                maxDate={new Date("2025-12-31")}
                placeholderText="Click to select date and time"
                excludeTimes={excludeTimes}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <p className="text-sm text-gray-600 mt-1">
                Selected date and time: {formatDate(selectedDate)}
              </p>
            </div>
    
            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Make reservation
            </button>
          </form>
        </div>
      </div>
    );
};

export default ReservePage;
