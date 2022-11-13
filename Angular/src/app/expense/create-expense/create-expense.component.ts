import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddExpense } from '../models/add-expense.models';
import { ExpenseCategory } from '../models/expense-category.models';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss']
})
export class CreateExpenseComponent implements OnInit {

  // @ts-ignore
  formGroup: FormGroup;
  categories: Array<ExpenseCategory> = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private readonly _expenseService: ExpenseService,
    private readonly _dialogRef: MatDialogRef<CreateExpenseComponent>
  ) { }

  ngOnInit(): void {
    this.createForm();
    this._expenseService.getExpenseCateogory().subscribe((result) => {
      this.categories = result;
    })
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      description: [null, [Validators.required]],
      category: [null, [Validators.required]],
      price: [null, [Validators.required]],
      expenseDate: [new Date, [Validators.required]]
    });
  }

  onCancelClick() {
    this._dialogRef.close();
  }

  onSubmit(post: AddExpense) {
    console.log(post);
    const expenseObj: AddExpense = {
      description: post.description,
      category: post.category,
      price: post.price,
      expenseDate: post.expenseDate

    }
    this._expenseService.addExpense(expenseObj).subscribe(() => {
      this.snackBar.open("Expense added.", "OK", {
          duration: 2000
      });
      this._dialogRef.close();
    });
  }

}
