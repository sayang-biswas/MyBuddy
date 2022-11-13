import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddExpense } from '../models/add-expense.models';

@Injectable()
export class ExpenseService {
  constructor(private http: HttpClient) {}

  getExpenses(): Observable<any> {
    return this.http.get('http://localhost:5242/api/Expense/GetExpenses');
  }

  getExpenseCateogory(): Observable<any> {
    return this.http.get(
      'http://localhost:5242/api/Expense/GetExpenseCategory'
    );
  }

  addExpense(qlinksObj: AddExpense): Observable<any> {
    const httpHeaders = new HttpHeaders(
        {
            "Content-Type": "application/json"
        }
    );

    const options = {
        headers: httpHeaders
    };
  return this.http.post<AddExpense>(
    'http://localhost:5242/api/Expense/AddExpense',
    JSON.stringify(qlinksObj),
    options
  );
}

delete(id: string): Observable<any> {
  return this.http.delete<any>(`http://localhost:5242/api/Expense/Delete?id=${id}`);
}
}
