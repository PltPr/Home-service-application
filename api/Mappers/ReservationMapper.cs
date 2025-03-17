using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.ReservationDto;
using api.Models;

namespace api.Mappers
{
    public static class ReservationMapper
    {
        public static Reservation toReservation(this AddReservationDto reservationDto, int serviceId, string userId)
        {
            return new Reservation
            {
                AppUserId=userId,
                ServiceId=serviceId,
                Address=reservationDto.Address,
                Date = DateTime.ParseExact(reservationDto.Date, "yyyy-MM-dd", CultureInfo.InvariantCulture).ToUniversalTime()
            };
        }
    }
}