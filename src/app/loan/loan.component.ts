import { Component } from '@angular/core';
import { InformationService } from '../information.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {
  get: any;
  check: any;
  active: boolean = false;
  filterjson: any = [];
  filterjson1: any = {};
  filter: any;
  getjson: any;
  getjson1:any;
  loanaccnt: any = true;
  error: any;
  errormes: any;
  title: any;
  body: any;
  constructor(private info:InformationService,private route:ActivatedRoute,private form:FormBuilder ){}
  addresponse:any = true;
  addwithdraw:any;
  inactive: boolean = false;
 

  getSaving = this.form.group({
    acctnum: ['', Validators.required],
    accounttype: ['', Validators.required],
    accountsubtype: ['', Validators.required],
    totalloanamount: ['', Validators.required],
    emiamount: ['', Validators.required],
    balanceamount: ['', Validators.required],
    
    
  })
  getvaule(data:any){
    
    this.addwithdraw = data.value
  
    //this.info.addProducts(this.addwithdraw).subscribe(x => console.log(x))
  
   }
   ngOnInit(){
    this.route.queryParams.subscribe((x => this.get = x['general']))
    if (this.get === "Loans"){
      this.check = true;
    }
    else {
      this.check = false;
    }
    }
    getSearch(search:any){
      this.filter = search.value;
      console.log(this.filter)
      this.info.getloandetails(this.filter).subscribe((response) => {

      console.log("response is...", response);
       this.getjson = response; 
      for(let x of this.getjson.value ){
      this.filterjson.push(x);
      console.log(this.filterjson)
      }
     
      console.log(this.filterjson[0].acctnum);
     
        
        
      
        
    
   
      
      
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
  }
if(x.status === "Active"){
  this.active = true;
}
if(x.status === "InActive"){
  this.inactive = true;
  
}
}
  }
    
}
