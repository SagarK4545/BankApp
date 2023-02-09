import { Component } from '@angular/core';
import { InformationService } from '../information.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
// import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})


export class WithdrawComponent {
  active: boolean = false;
  getjson: any = [];
  title: any;
  body: any;
  inactive: boolean = false;
  currentstatus: any;
  error: any = true;
  errormes: any;

  constructor(private infro: InformationService, modalService: NgbModal, private form:FormBuilder,private toastr: ToastrService) { }
  addresponse: any = false;
  addwithdraw: any;
  filter:any;
  response: any = false;
  jsonres: any = [];
  filterjson:any = [];
  withdraw:any = "withdraw";
  hide:any = true;
  getSaving = this.form.group({
    
    acctnum: ['', Validators.required],
    txndetail: [{ value: '', disabled: true }, Validators.required],
    withdrawamount: ['', Validators.required],
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

    this.addwithdraw = data.value
    this.addwithdraw['txndetail'] = "withdraw";

    console.log(this.addwithdraw)
    
    if (this.currentstatus === "active"){
    this.infro.addWithdraw(this.addwithdraw).subscribe((response) => {

      console.log("response is...", response); 

      //console.log(this.addwithdraw.getData.Value);
      this.jsonres = response;
      
      console.log(this.jsonres)

      console.log(this.jsonres.balance);
      if (this.jsonres.statusvalue === true ){
        this.addresponse = true;
        this.title = " withdraw is successful";
        this.body = this.addwithdraw.acctnum + " total balance is " + this.jsonres.value.balance;
        this.infro.getsuccess(this.body,this.title);
      }
      else{
        this.title = "withdraw is unsuccessful";
        this.body = "something went wrong";
        this.infro.geterror(this.body,this.title);
      }
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
      
       console.log(" initial " ,this.filterjson);
      console.log(this.filterjson.value);
      
      this.hide = true;
     
      
      
    }, (error) => {

      console.log('error is ', error.error);
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
//   }else{
//     console.log('gfd')
//   }
// }

getAccountDetails(data:any){
  
  for(let x of this.filterjson.value){
  if(data.value === x.acctnum ){
    
    this.getSaving.controls.txndetail.setValue("withdraw");
    this.getSaving.controls.balance.setValue(x.balance);
    console.log(x.status)
    this.currentstatus = x.status;
    console.log(this.currentstatus);
    if(x.status === "active"){
      this.active = true;
    }
    if(x.status === "InActive"){
      this.inactive = true;
      console.log(this.inactive)
    }
    console.log(this.active , "and", this.inactive)
    // if(x.status === "InActive"){
    
    // }
  }
}
  

}

}


  //this.info.addProducts(this.addwithdraw).subscribe(x => console.log(x))

