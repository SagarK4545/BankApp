import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-customer-saving',
  templateUrl: './customer-saving.component.html',
  styleUrls: ['./customer-saving.component.css']
})
export class CustomerSavingComponent implements OnInit{
  CustData: any;
  trans: any = {};
  error: any;
  errormes: any;
  body: any;
  title: any;

  constructor(private form:FormBuilder,private info:InformationService){}
  filterjson: any = [];
  
  getjson: any;
  getSaving = this.form.group({
    acctnum: ['', Validators.required],
    accounttype: ['', Validators.required],
    accsubtype: ['', Validators.required],
    balance: ['', Validators.required],
    transfer_limit: ['', Validators.required],
    branch_code: ['', Validators.required],
    
    
  })
  ngOnInit(){
      this.CustData=this.info.CustomerWithAccount;
      console.log("inside",this.CustData);
  this.trans["cust_id"] = this.info.CustomerWithAccount.cust_id;
  this.trans["phone"] = "";
  console.log(this.trans)

  this.info.getsavingdetails(this.trans).subscribe((response) => {
    console.log(567)
    console.log("response is...", response);
     this.getjson = response; 

    for(let x of this.getjson.value ){
    
    this.filterjson.push(x)
    this.getSaving.controls.acctnum.setValue(x.acctnum);
   
    }
    
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
  })

  

 
  }
  getAccountDetails(acctnum:any){
    console.log(acctnum.value)
    for (let x of this.filterjson){
      if(acctnum.value === x.acctnum){
    this.getSaving.controls.accounttype.setValue(x.accounttype);
  
    this.getSaving.controls.accsubtype.setValue(x.accsubtype);

    this.getSaving.controls.balance.setValue(x.balance);

    this.getSaving.controls.transfer_limit.setValue(x.transfer_limit);

    this.getSaving.controls.branch_code.setValue(x.branch_code);
  }
}
}
}
