using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;


namespace api.Controllers
{
    [Route("api/service")]
    [ApiController]
    public class ServiceController :ControllerBase
    {
        private readonly IServiceRepository _serviceRepository;
        public ServiceController(IServiceRepository serviceRepository)
        {
            _serviceRepository=serviceRepository;   
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var offers = await _serviceRepository.GetAllAsync();
            if(offers==null) return NotFound();
            return Ok(offers);
        }
    }
}