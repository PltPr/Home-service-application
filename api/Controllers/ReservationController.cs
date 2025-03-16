using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.ReservationDto;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/reservation")]
    [ApiController]
    public class ReservationController :ControllerBase
    {
        private readonly UserManager<AppUser>_userManager;
        private readonly IReservationRepository _reservationRepository;
        private readonly IServiceRepository _serviceRepository;
        public ReservationController(UserManager<AppUser> userManager,IReservationRepository reservationRepository,IServiceRepository serviceRepository)
        {
            _userManager=userManager;
            _reservationRepository=reservationRepository;
            _serviceRepository=serviceRepository;
        }

        [HttpPost]
        public async Task<IActionResult> AddReservation(AddReservationDto reservationDto, int serviceId)
        {
            if(!ModelState.IsValid) return BadRequest();

            var user = await _userManager.GetUserAsync(User);

            if(user==null) return Unauthorized("User not found");

            var offer = await _serviceRepository.GetByIdAsync(serviceId);
            if (offer==null)return NotFound("Offer not exist");

            var userId=user.Id;
            

            var reservationModel = reservationDto.toReservation(serviceId,userId);

            await _reservationRepository.AddReserevationAsync(reservationModel);

            return Ok(reservationModel);
        }
    }
}