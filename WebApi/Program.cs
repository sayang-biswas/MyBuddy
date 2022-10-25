using Microsoft.EntityFrameworkCore;
using MyBuddy.DbModels;
using MyBuddy.Services;
using MyBuddy.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var connectionSettings = builder.Configuration.GetConnectionString("MyBuddyDb");
builder.Services.AddDbContext<MyBuddyDBContext>(conxt => conxt.UseNpgsql(connectionSettings));

builder.Services.AddTransient<IQlinksService, QlinksService>();
builder.Services.AddTransient<IExpenseService, ExpenseService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(
       "MyBuddyPolicy",
       builder => builder.WithOrigins(new[] { "http://localhost:7872", "http://localhost:4200", "http://localhost" })
       .SetIsOriginAllowedToAllowWildcardSubdomains()
       .AllowAnyMethod()
       .AllowAnyHeader()
       .AllowCredentials());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("MyBuddyPolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();
