import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-customer-loan',
  templateUrl: './customer-loan.component.html',
  styleUrls: ['./customer-loan.component.css']
})
export class CustomerLoanComponent implements OnInit {
  filterjson: any = [];
  CustData: any;
  trans: any = {};
  getjson: any;
  active: boolean = false;
  inactive: boolean = false;
  error: any;
  errormes: any;
  body: any;
  title: any;

constructor(private info:InformationService,private form:FormBuilder){}
  getSaving = this.form.group({
    acctnum: ['', Validators.required],
    accounttype: ['', Validators.required],
    accountsubtype: ['', Validators.required],
    totalloanamount: ['', Validators.required],
    emiamount: ['', Validators.required],
    balanceamount: ['', Validators.required],
    
    
  })
  ngOnInit(){
    
    this.CustData=this.info.CustomerWithAccount;
    console.log("inside",this.CustData);
this.trans["cust_id"] = this.info.CustomerWithAccount.cust_id;
this.trans["phone"] = "";
console.log(this.trans)

this.info.getloandetails(this.trans).subscribe((response) => {
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
  getLoandetail(acctnum:any){
    console.log(acctnum.value)
    for (let x of this.filterjson){
      if(acctnum.value === x.acctnum){
        console.log(x.totalloanamount)
    this.getSaving.controls.accounttype.setValue(x.accounttype);
  
    this.getSaving.controls.accountsubtype.setValue(x.accsubtype);
    this.getSaving.controls.emiamount.setValue(x.emiamount);

    this.getSaving.controls.balanceamount.setValue(x.balanceamount);
    this.getSaving.controls.totalloanamount.setValue(x.totalloanamount);
    if(x.status === "Active"){
      this.active = true;
    }
    if(x.status === "InActive"){
      this.inactive = true;
      
    }
  }
// if(x.status === "Active"){
//   this.active = true;
// }
// console.log(this.active);
}
  }
}
