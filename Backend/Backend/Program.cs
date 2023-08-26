using Backend.Data;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers(options =>
{
    options.OutputFormatters.RemoveType<SystemTextJsonOutputFormatter>(); // Remove the default JSON output formatter
    options.OutputFormatters.Add(new SystemTextJsonOutputFormatter(new JsonSerializerOptions
    {
        ReferenceHandler = ReferenceHandler.Preserve, // Configure reference loop handling
    }));
});


builder.Services.AddDbContext<AppDbContext>();
builder.Services.AddCors();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(p => p.AddPolicy("corspolicy", build =>
{
    build.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
}));



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("corspolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();
