import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InformationService } from '../information.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  filter: any;
  active: boolean = false;
  title: any;
  body: any;
  currentstatus: any;
  inactive: boolean = false;
  error: any;
  errormes: any;

  constructor(private infro: InformationService, modalService: NgbModal, private form: FormBuilder) { }
  addresponse: any = true;
  adddeposite: any;
  response: any = false;
  jsonres: any = []
  filterjson: any = [];
  Deposit: any = "Deposit";

  getSaving = this.form.group({
    acctnum: ['', Validators.required],
    txndetail: [{ value: '', disabled: true }, Validators.required],
    depositamount: ['', Validators.required],
    balance:[{ value: '', disabled: true }, Validators.required]
  })


  ackresponse() {
    if (this.response === false) {

      this.response = true

    }

    else {

      this.response = false

    }

  }


  getvalue(data: any) {
    this.adddeposite = data.value
    this.adddeposite["txndetail"] = "deposite";

    console.log(this.adddeposite)
    if (this.currentstatus === "active"){
    this.infro.addDeposit(this.adddeposite).subscribe((response) => {

      console.log("response is...", response);

      //console.log(this.addwithdraw.getData.Value);
      this.jsonres = response;
      if (this.jsonres.statusvalue === true ){
        this.addresponse = true;
        this.title = " deposit is successful";
        this.body = this.adddeposite.acctnum + " total balance is " + this.jsonres.value.balance;
        this.infro.getsuccess(this.body,this.title);
      }
      else{
        this.title = "deposit is unsuccessful";
        this.body = "something went wrong";
        this.infro.geterror(this.body,this.title);
      }
      console.log(this.jsonres)

      console.log(this.jsonres.balance);
      console.log(this.addresponse);

    }, (error) => {

      console.log('error is ', error);
      this.error = error.error.statusvalue;
      this.errormes = error.error.StatusMessage
      console.log(this.error) 
      if (this.error === false ){
        this.title = "something went wrong";
        this.body = this.errormes;
        this.infro.geterror(this.body,this.title)
      
        
      }

    })
  }
    else{
      this.body = "Please check with account";
      this.title = "Account is Inactive";
      this.infro.geterror(this.body,this.title);
    }

  }
  getSearch(data: any) {
    this.filter = data.value
    console.log(data.value)

    // if (data.value.phone_number.length === 10){

    this.infro.getFilterData(this.filter).subscribe((response) => {

      console.log("response is...", response);

      this.filterjson = response;

      console.log(this.filterjson[0].balance);
      if (this.filterjson[0].status === "active") {
        this.active = true;
      }
      console.log(this.active);

    }, (error) => {

      console.log('error is ', error);
      this.error = error.error.statusvalue;
      this.errormes = error.error.StatusMessage
      console.log(this.error) 
      if (this.error === false ){
        this.title = "something went wrong";
        this.body = this.errormes;
        this.infro.geterror(this.body,this.title)
      
        
      }

    })
  }
  getAccountDetails(data: any) {
    console.log(data.value);
    for(let x of this.filterjson.value){
      if(data.value === x.acctnum ){
    this.getSaving.controls.txndetail.setValue("deposite");
    this.getSaving.controls.balance.setValue(x.balance);
    console.log(x.status)
    this.currentstatus = x.status;
    if(x.status === "active"){
      this.active = true;
    }
    if(x.status === "InActive"){
      this.inactive = true;
    
    }
  }
}
  }



}
