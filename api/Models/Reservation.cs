using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Reservation
    {
        public int AppUserId { get; set; }
        public string ServiceId { get; set; }
        public string Address { get; set; }
        public DateTime Date { get; set; }
    }
}