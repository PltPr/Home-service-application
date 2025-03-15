using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class ServiceRepository : IServiceRepository
    {
        private readonly ApplicationDBContext _context;
        public ServiceRepository(ApplicationDBContext context)
        {
            _context=context;
        }
        public async Task<List<Service>> GetAllAsync()
        {
            var offers = await _context.Service.ToListAsync();
            Console.WriteLine(offers);
            return offers;
        }
    }
}