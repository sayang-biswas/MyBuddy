import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateExpenseComponent } from './create-expense/create-expense.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  constructor(
    private readonly _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onAddExpenseClick() {
    const dialogRef = this._dialog.open(CreateExpenseComponent, {
      width: '400px',
      data: '',
    });
  }
}
