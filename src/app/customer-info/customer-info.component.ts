import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { InformationService } from '../information.service';
import { IconModule,IconSetService } from '@coreui/icons-angular';
import { cilTrash ,cilPlus, cilPencil , cilFilter ,brandSet , cilList} from '@coreui/icons';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit{
 
  addresponse:any = false;
  users = [
    {
      cust_id : 1,
      firstname : "sagar",
      accounttype : "loan",
      accsubtype : "vehicle",
      acctnum : 123,
      status : "active",
      balance : 100,
      balanceamount : 200,

    },
    {
      cust_id : 2,
      firstname : "sagar1",
      accounttype : "loan",
      accsubtype : "vehicle",
      acctnum : 123,
      status : "active",
      balance : 100,
      balanceamount : 200,

    },
    {
      cust_id : 3,
      firstname : "sagar2",
      accounttype : "loan",
      accsubtype : "vehicle",
      acctnum : 123,
      status : "active",
      balance : 100,
      balanceamount : 200,

    },
    {
      cust_id : 4,
      firstname : "sagar3",
      accounttype : "loan",
      accsubtype : "vehicle",
      acctnum : 123,
      status : "active",
      balance : 100,
      balanceamount : 200,

    },
    {
      cust_id : 5,
      firstname : "sagar4",
      accounttype : "loan",
      accsubtype : "vehicle",
      acctnum : 123,
      status : "active",
      balance : 100,
      balanceamount : 200,

    },
    {
      cust_id : 6,
      firstname : "sagar5",
      accounttype : "loan",
      accsubtype : "vehicle",
      acctnum : 123,
      status : "active",
      balance : 100,
      balanceamount : 200,

    },
    {
      cust_id : 7,
      firstname : "sagar6",
      accounttype : "loan",
      accsubtype : "vehicle",
      acctnum : 123,
      status : "active",
      balance : 100,
      balanceamount : 200,

    },
    {
      cust_id : 8,
      firstname : "sagar7",
      accounttype : "loan",
      accsubtype : "vehicle",
      acctnum : 123,
      status : "active",
      balance : 100,
      balanceamount : 200,

    },
    {
      cust_id : 9,
      firstname : "sagar8",
      accounttype : "loan",
      accsubtype : "vehicle",
      acctnum : 123,
      status : "active",
      balance : 100,
      balanceamount : 200,

    },
    {
      cust_id : 10,
      firstname : "sagar9",
      accounttype : "loan",
      accsubtype : "vehicle",
      acctnum : 123,
      status : "active",
      balance : 100,
      balanceamount : 200,

    },
    {
      cust_id : 11,
      firstname : "sagar10",
      accounttype : "loan",
      accsubtype : "vehicle",
      acctnum : 123,
      status : "active",
      balance : 100,
      balanceamount : 200,

    }
  
   ]
   reponse(){

    if (this.addresponse === false){

      this.addresponse = true

    }

    else{

      this.addresponse = false

    }

  }
 // users:any;
  
ngOnInit(){
  // this.info.getAllCustomers().subscribe(x => console.log(x));
  // this.info.getAllCustomers().pipe(map((data:any) => {
  //   let emptyArray: any = [];
  //   for(const key in data){
  //     if(data.hasOwnProperty(key)){
  //       emptyArray.push(data[key]);
  //     }
     
  //   }
  //   return emptyArray
  //  })).subscribe(x => {
  //  this.users = x
   
  // }
  // );
  // console.log(this.users)
   }
   constructor (private info:InformationService , public IconSet:IconSetService) {
    IconSet.icons = { cilTrash ,cilPlus,cilPencil,cilFilter,cilList, ...brandSet };
  }
  getvalue(data:any){
  this.info.getCustomerFilterData(data).pipe(map((data:any) => {
    let emptyArray: any = [];
    for(const key in data){
      if(data.hasOwnProperty(key)){
        emptyArray.push(data[key]);
      }
     
    }
    return emptyArray
   })).subscribe(x => {
   this.users = x
   
  }
  );
  console.log
  this.info.addProducts(this.users).subscribe(x => console.log(x))
   }
   getdata(){
  // this.info.getAllCustomers().pipe(map((data:any) => {
  //   let emptyArray: any = [];
  //   for(const key in data){
  //     if(data.hasOwnProperty(key)){
  //       emptyArray.push(data[key]);
  //     }
     
  //   }
  //   return emptyArray
  //  })).subscribe(x => {
  //  this.users = x
   
  // }
  // );
  // console.log(this.users)
   }

}
