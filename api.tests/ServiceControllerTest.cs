using Moq;
using Xunit;
using Microsoft.AspNetCore.Mvc;
using api.Controllers;
using api.Models;
using api.Interfaces;
using api.DTOs.ServiceDto;
using api.Mappers;
using System.Threading.Tasks;

namespace api.tests
{
    public class ServiceControllerTest
    {
    [Fact]
    public async Task GetServiceById_ReturnsOkResult_WithServiceDto()
    {
        // Arrange
        var mockRepo = new Mock<IServiceRepository>();
        var serviceId = 1;
        var mockService = new Service { Id = serviceId, Name = "Test Service" };

        mockRepo.Setup(repo => repo.GetByIdAsync(serviceId)).ReturnsAsync(mockService);

        var controller = new ServiceController(mockRepo.Object);

        // Act
        var result = await controller.GetServiceById(serviceId);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result); 
        var serviceDto = Assert.IsType<GetServiceByIdDto>(okResult.Value); 
        Assert.Equal("Test Service", serviceDto.Name); 
    }
    }
}