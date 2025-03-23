import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import { postReservationApi } from '../../Api/ReservationService';
import { useParams } from 'react-router-dom';

type Props = {};

const ReservePage = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const[address,setAddress]=useState<string>("");
  const {serviceId}=useParams<{serviceId:string}>();
  const serviceIdNumber = Number(serviceId);
  console.log(serviceIdNumber);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  



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

  return (
    <div>
      <h1>Reserve Page</h1>
      <form onSubmit={handleReservation}>

      <label htmlFor="address">Enter Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter address"
        />



        <label htmlFor="reservationDateTime">Choose a date and time:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="yyyy-MM-dd HH:mm"
          timeFormat="HH:mm"
          timeIntervals={120} 
          minDate={new Date()}
          maxDate={new Date('2025-12-31')}
          placeholderText="Click to select date and time"
        />
        <p>Selected date and time: {formatDate(selectedDate)}</p>

        <button type="submit">Make reservation</button>
      </form>
    </div>
  );
};

export default ReservePage;
