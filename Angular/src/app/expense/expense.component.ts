import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { Expense } from './models/expense.models';
import { ExpenseService } from './services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  displayedColumns: string[] = [
    'category',
    'description',
    'createdTime',
    'price'
  ];

  dataSource: MatTableDataSource<Expense>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this._expenseService.getExpenses().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Expense>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.setDefaultSorting();
  }

  onAddExpenseClick() {
    const dialogRef = this._dialog.open(CreateExpenseComponent, {
      width: '400px',
      data: '',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  isDataSourceNotActive(): boolean {
    if (!this.dataSource) {
      return false;
    }
    if (this.dataSource.data.length === 0) {
      return false
    }
    return true;
  }

  private setDefaultSorting() {
    const defaultSorting: Sort = { active: "createdTime", direction: "desc" };
    this.sort.active = defaultSorting.active;
    this.sort.direction = defaultSorting.direction;
    this.sort.sortChange.emit(defaultSorting);
  }
}
