import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositeComponent } from './deposite/deposite.component';
import { HeaderComponent } from './header/header.component';
import { LoanComponent } from './loan/loan.component';
import { SavingAccountComponent } from './saving-account/saving-account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CustomerFilterComponent } from './customer-filter/customer-filter.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { NewbashboardComponent } from './newbashboard/newbashboard.component';
import { AppComponent } from './app.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { DepositComponent } from './deposit/deposit.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentnewComponent } from './documentnew/documentnew.component';
import { DocumentmasterComponent } from './documentmaster/documentmaster.component';
import { AddSavingsAccountComponent } from './add-savings-account/add-savings-account.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';


const routes: Routes = [
  { path : 'CustomerInfo', component:CustomerInfoComponent},
  {path: 'AddSavings', component:AddSavingsAccountComponent},
  { path : 'Customer', component:AddCustomerComponent},
  { path : 'AddCustomer', component:AccountCreationComponent},
  {path : 'Login', component:HeaderComponent},
  {path : 'Withdraw', component:WithdrawComponent},
  {path : 'Deposits', component:DepositComponent},
  {path : 'Transactions', component:TransactionsComponent},
  {path: 'Savings', component:SavingAccountComponent},
  {path: 'Loans', component:LoanComponent},
  {path: 'customerdetail', component:DepositeComponent},
   {path : 'Documents',component:DocumentmasterComponent},
   



   
   
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
