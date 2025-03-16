using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOs.ReservationDto;
using api.Interfaces;
using api.Models;

namespace api.Repository
{
    public class ReservationRepository : IReservationRepository
    {
        private readonly ApplicationDBContext _context;
        public ReservationRepository(ApplicationDBContext context)
        {
            _context=context;
        }
        public async Task<Reservation> AddReserevationAsync(Reservation reservationModel)
        {
            await _context.Reservation.AddAsync(reservationModel);
            await _context.SaveChangesAsync();
            return reservationModel;
        }
    }
}