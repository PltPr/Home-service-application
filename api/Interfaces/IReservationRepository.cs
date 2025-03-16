using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.ReservationDto;
using api.Models;

namespace api.Interfaces
{
    public interface IReservationRepository
    {
        Task<Reservation>AddReserevationAsync(Reservation reservationModel);
    }
}