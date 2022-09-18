import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { HomeComponent } from './home/home.component';
import { QlinksComponent } from './qlinks/qlinks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'qlinks', component: QlinksComponent},
  { path: 'expense', component: ExpenseComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
