import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'app-add-new-account',
  templateUrl: './add-new-account.component.html',
  styleUrls: ['./add-new-account.component.css']
})
export class AddNewAccountComponent implements OnInit {
  error: any;
  errormes: any;
  constructor(private info: InformationService, private route:Router) { }
  addresponse: any = true;
  savings: any;
  Jsonres: any;
  Selected: any = false;
  loansubtypes: any;
  savingsubtypes: any;
  Types: any;
  AddPayload:any;
  details: any;
  CustById:any;
  body:any;
  title:any;
  accounttype:any;

  ngOnInit(): void {
    this.info.getAccountType().subscribe((response) => {
      console.log(" A response is...", response);
      this.details = response;
      this.accounttype = this.details.value.map((x:any) => x.accounttype);
      console.log(this.accounttype)
 
  this.accounttype  = Array.from(new Set(this.accounttype ));
      console.log(this.details);
      console.log(this.accounttype);
    }, (error) => {
      console.log('error is ', error);
      this.error = error.error.statusvalue;
      this.errormes = error.error.StatusMessage
      console.log(this.error) 
      if (this.error === false ){
        this.title = "something went wrong";
        this.body = this.errormes;
        this.info.geterror(this.body,this.title)
      
        
      }
    });
  }

  //details:any;   
  addSavings(data: any) {



    this.savings = data.value
    console.log(this.savings);


    if (this.savings.accountType === "saving") {
      console.log("in savings");
      console.log(this.details);
      this.savings["custId"] = this.info.CustomerWithAccount.cust_id;
      console.log(this.savings["custId"])
      this.info.AddSavings(this.savings).subscribe((response) => {
        console.log(" Add Savings response is...", response);
        this.Jsonres = response;
        console.log(this.Jsonres);
        // this.body = "Customer of "+ this.Jsonres.cust_id + " of Account num " + this.Jsonres.acctnum + " created ";
      this.title = "Account created"
      this.body = "Saving Account Created"
      this.info.getsuccess(this.body,this.title);
      }, (error) => {
        console.log('error is ', error);
        this.error = error.error.statusvalue;
      this.errormes = error.error.StatusMessage
      console.log(this.error) 
      if (this.error === false ){
        this.title = "something went wrong";
        this.body = this.errormes;
        this.info.geterror(this.body,this.title)
      
        
      }
      });
      // this.route.navigate(['/CustomerInfo']);
    }

    if (this.savings.accountType === "loan") {
      console.log("in loan");
      console.log(this.info.CustomerWithAccount)
      this.savings["CustId"] = this.info.CustomerWithAccount.cust_id;
      console.log(this.savings)
      // this.AddPayload = this.info.AddCustomerPayload;
      
      this.info.AddLoan(this.savings).subscribe((response) => {
        console.log(" Add Customer response is...", response);
        this.Jsonres = response;
        console.log(this.Jsonres);
        // this.body = "Customer of "+ this.Jsonres.cust_id + " of Account num " + this.Jsonres.acctnum + " created ";
      this.title = "Account created"
      this.body = "Loan Account Created"
      this.info.getsuccess(this.body,this.title);
      }, (error) => {
        console.log('error is ', error)
        this.error = error.error.statusvalue;
      this.errormes = error.error.StatusMessage
      console.log(this.error) 
      if (this.error === false ){
        this.title = "something went wrong";
        this.body = this.errormes;
        this.info.geterror(this.body,this.title)
      
        
      }
      });
      // this.info.getCustomer(this.Jsonres.value.Customerid.cust_id).subscribe((response) => {
      //   console.log("  Customer  details response is...", response);
      //   this.CustById = response;
      //   this.info.AssignCustWithAccount(this.CustById);
      // });
    // this.info.AssignCustWithAccount(data);
 
      // this.route.navigate(['/CustomerInfo']);
    
    }
  }

}
