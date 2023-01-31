import { Component, OnInit } from '@angular/core';
import { ExpenseStatistics } from '../models/expense-statistics.models';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-statistics',
  templateUrl: './expense-statistics.component.html',
  styleUrls: ['./expense-statistics.component.scss']
})
export class ExpenseStatisticsComponent implements OnInit {

  expenseAgg: Array<ExpenseStatistics>;

  constructor(
    private readonly _expenseService: ExpenseService,
  ) { }

  ngOnInit(): void {
    this._expenseService.getExpenseStatistics().subscribe((result) => {
      this.expenseAgg = result;
      console.log(this.expenseAgg);
    });
  }

  private initialize() {
    this._expenseService.getExpenseStatistics().subscribe((result) => {
      this.expenseAgg = result;
      console.log(this.expenseAgg);
    });
  }

}
