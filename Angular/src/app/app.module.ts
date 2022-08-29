import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QlinksComponent } from './qlinks/qlinks.component';
import { HomeComponent } from './home/home.component';
import { QlinksService } from './qlinks/service/qlinks.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateQlinksComponent } from './qlinks/create-qlinks/create-qlinks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpenseComponent } from './expense/expense.component';
import { CreateExpenseComponent } from './expense/create-expense/create-expense.component';
import { ExpenseService } from './expense/services/expense.service';

@NgModule({
  declarations: [
    AppComponent,
    QlinksComponent,
    HomeComponent,
    CreateQlinksComponent,
    ExpenseComponent,
    CreateExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    QlinksService,
    ExpenseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
