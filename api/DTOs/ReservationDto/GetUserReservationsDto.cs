using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs.ReservationDto
{
    public class GetUserReservationsDto
    {
        public string ServiceName { get; set; }
        public string Address { get; set; }
        public string Date { get; set; }
    }
}