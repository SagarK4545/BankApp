import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositeComponent } from './deposite/deposite.component';
import { HeaderComponent } from './header/header.component';
import { LoanComponent } from './loan/loan.component';
import { SavingAccountComponent } from './saving-account/saving-account.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path : 'Login', component:HeaderComponent},
  {path : '' , component:DashboardComponent},
  {path: 'Savings', component:SavingAccountComponent},
  {path: 'Loans', component:LoanComponent},
  {path: 'Deposit', component:DepositeComponent},
  {path: 'Withdraw', component:ViewComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
