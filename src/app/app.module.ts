import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule } from '@angular/forms';
 import { HttpClientModule} from '@angular/common/http';
 import { InformationService } from './information.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SavingAccountComponent } from './saving-account/saving-account.component';
import { LoanComponent } from './loan/loan.component';
import { HeaderComponent } from './header/header.component';
import { AgGridModule } from 'ag-grid-angular';

import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
// Import the Azure AD B2C configuration 
import { msalConfig, protectedResources } from './auth-config';
import { TransactionsComponent } from './transactions/transactions.component';
import { RootComponent } from './root/root.component';

import { NgbModule, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { COUNTRIES } from './customer-filter/countries';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { PayEMIComponent } from './pay-emi/pay-emi.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerFilterComponent } from './customer-filter/customer-filter.component';
import { DepositeComponent } from './deposite/deposite.component';
import { ReactiveFormsModule } from '@angular/forms';
import {bootstrapApplication} from '@angular/platform-browser';

import { NewbashboardComponent } from './newbashboard/newbashboard.component';
import { RouterModule } from '@angular/router';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { IconModule,IconSetService } from '@coreui/icons-angular';
import { DepositComponent } from './deposit/deposit.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentnewComponent } from './documentnew/documentnew.component';
import { DocumentmasterComponent } from './documentmaster/documentmaster.component';


export function MSALInstanceFactory():IPublicClientApplication{ 

  return new PublicClientApplication({

    auth:{

      clientId:'d76f4c48-fcf4-4182-ba25-6b92e5ba3e7f',

      authority: "https://login.microsoftonline.com/a7bae7fa-0df1-4562-a554-16a95f54c8ce",

      redirectUri:'http://localhost:4200/'

    }

  })

}

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    HeaderComponent,
    RootComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    PayEMIComponent,
    NewbashboardComponent,
    SavingAccountComponent,
    WithdrawComponent,
    DepositeComponent,
    CustomerInfoComponent,
    DepositComponent,
    DocumentsComponent,
    DocumentnewComponent,
    DocumentmasterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CustomerFilterComponent,
    TransactionsComponent,
    IconModule,
    RouterModule,
    NgbModule,
    NgbNavOutlet,
    ReactiveFormsModule,
  ],
  providers: [InformationService,IconSetService, {
    provide:MSAL_INSTANCE,
    useFactory:MSALInstanceFactory
  },
MsalService],
  
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
