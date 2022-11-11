import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    'price',
    'actions'
  ];

  dataSource: MatTableDataSource<Expense>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _expenseService: ExpenseService,
    private readonly snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this._expenseService.getExpenses().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Expense>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.setDefaultSorting();
    this.getExpenseByCategory();
  }

  onAddExpenseClick() {
    const dialogRef = this._dialog.open(CreateExpenseComponent, {
      width: '800px',
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getExpenseByCategory() {
    
  }

  onDeleteClick(id: string) {
    this._expenseService.delete(id).subscribe(result => {
      this.snackBar.open("Expense deleted successfully.", "OK", {
        duration: 2000
    });
    this.ngOnInit();
    });
  }

  onEditClick(id: string) {
    alert("Not implemented....too lazy.");
  }

  private setDefaultSorting() {
    const defaultSorting: Sort = { active: "createdTime", direction: "desc" };
    this.sort.active = defaultSorting.active;
    this.sort.direction = defaultSorting.direction;
    this.sort.sortChange.emit(defaultSorting);
  }
}
