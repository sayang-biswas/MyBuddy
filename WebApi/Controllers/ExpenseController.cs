﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyBuddy.Models;
using MyBuddy.Services.Interfaces;

namespace MyBuddy.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class ExpenseController : ControllerBase
    {
        private readonly IExpenseService _expenseService;

        public ExpenseController(IExpenseService expenseService)
        {
            _expenseService = expenseService;
        }

        [HttpGet]
        public async Task<IActionResult> GetExpenses()
        {
            var result = await _expenseService.GetExpensesAsync();
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> AddExpense(AddExpense item)
        {
            await _expenseService.AddExpenseAsync(item);
            return Ok();
        }
    }
}