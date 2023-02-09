import { Component,OnInit, ViewEncapsulation } from '@angular/core';
import { InformationService } from '../information.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-saving-account',
  templateUrl: './saving-account.component.html',
  styleUrls: ['./saving-account.component.css'],
  encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.dark-modal .modal-content {
				background-color: #292b2c;
				color: white;
			}
			.dark-modal .close {
				color: white;
			}
			.light-blue-backdrop {
				background-color: #5cb3fd;
			}
		`,
	],
})
export class SavingAccountComponent implements OnInit {
  active: boolean = false;
	filterjson: any = [];
	filter: any;
  getjson: any;
  inactive: boolean = false;
  error: any;
  errormes: any;
  title: any;
  body: any;


  constructor(private info:InformationService, modalService: NgbModal,private route:ActivatedRoute,private form:FormBuilder){}
  addresponse:any = true;
  reson:any = true;
  addwithdraw:any;
  get:any;
  check:any;
  loan = [{acct:"1234"},{acct:"2345"},{acct:"3456"}]
  getSaving = this.form.group({
    acctnum: ['', Validators.required],
    accounttype: ['', Validators.required],
    accountsubtype: ['', Validators.required],
    balance: ['', Validators.required],
    transfer_limit: ['', Validators.required],
    branch_code: ['', Validators.required],
    
    
  })

  
  getvaule(data:any){
    
    this.addwithdraw = data.value
  }
  
  ngOnInit(){
	this.route.queryParams.subscribe((x => this.get = x['general']))
	if (this.get === "Saving"){
		this.check = true;
	}
	else{
		this.check = false;
	}
  }
  getSearch(search:any){
    this.filter = search.value;
    console.log(this.filter)
    this.info.getsavingdetails(this.filter).subscribe((response) => {

    console.log("response is...", response);
     this.getjson = response; 

    for(let x of this.getjson.value ){
      console.log(900,"something" ,x)
    this.filterjson.push(x)
   
    }
   
    console.log( " hi sagar",this.getjson[0]);
    console.log(this.getjson[0].status);
    
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
  
    this.getSaving.controls.accountsubtype.setValue(x.accsubtype);

    this.getSaving.controls.balance.setValue(x.balance);

    this.getSaving.controls.transfer_limit.setValue(x.transfer_limit);

    this.getSaving.controls.branch_code.setValue(x.branch_code);
    if(x.status === "active"){
      this.active = true;
    }
    if(x.status === "InActive"){
      this.inactive = true;
      console.log(this.inactive)
    }
  }
  
}
}

  
 // this.info.addProducts(this.addwithdraw).subscribe(x => console.log(x))
    
}
