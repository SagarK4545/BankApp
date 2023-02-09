import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { InformationService } from '../information.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilTrash, cilPlus, cilPencil, cilFilter, brandSet, cilList } from '@coreui/icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  page:any = 1;
    collectionSize:any;
    pageSize = 100;
  customers:any;
  addresponse: any = false;
  filterjson: any;
  filter: any;
  EditData: any;
  jsonres: any;
  variable: any = false;
  editresponse: any = false;
  CustomerEdit: any;
  UpdPayload:any = {};
  custId:any;
  myFilterCust = this.form.group({
    cust_id: ['', Validators.required],
    firstname: ['', Validators.required] ,
    status: ['', Validators.required]
   });
  
  myEditcust = this.form.group({
    cust_id: [{ value: '', disabled: true }, Validators.required],
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Address1: ['', Validators.required],
    Address2: ['', Validators.required],
    City: ['', Validators.required],
    State: ['', Validators.required],
    Country: ['', Validators.required],
    ZIPCode: ['', Validators.required],
    EmailId: ['', Validators.required],
    Mobile: ['', Validators.required],
    Phone: ['', Validators.required],
    MaritalStatus: ['', Validators.required],
    DateOfBirth: ['', Validators.required]

  });
  body: any;
  total: any;
  error: any;
  errormes: any;
  title: any;

 
  reponse() {
    
    if (this.addresponse === false) {
      this.addresponse = true
    }
    else {
      this.addresponse = false
    }

  }
  users: any = [];
  customer: any = [];

  ngOnInit() {

    this.info.getAllCustomers().subscribe((response: any = []) => {

      console.log("All Customers  response is...", response);
      this.users = response;
      this.customers = this.users.value;
      this.collectionSize = this.customers.length;
      
      console.log("users", this.users);

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


  constructor(private info: InformationService, public IconSet: IconSetService, private form: FormBuilder) {
    IconSet.icons = { cilTrash, cilPlus, cilPencil, cilFilter, cilList, ...brandSet };
  }

  getvalue(data1: any) {

    console.log(data1.value)
    this.info.getCustomerFilterData(data1.value).pipe(map((data: any) => {
      let emptyArray: any = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          emptyArray.push(data[key]);
        }

      }
      console.log(emptyArray)
      return emptyArray
    })).subscribe(x => {
      this.users = x

    },
    (error) => {
      console.log('error is ', error);
      this.error = error.error.statusvalue;
      this.errormes = error.error.StatusMessage
      console.log(this.error) 
      if (this.error === false ){
        this.title = "something went wrong";
        this.body = this.errormes;
        this.info.geterror(this.body,this.title)
      
        
      }
    }
    );
    
  }

  filterCustomer(filter: any) {
    console.log(890)
    console.log(filter.value)
    this.info.getCustomerFilterData(filter.value).subscribe((response) => {
      console.log(" Customer filter response is...", response);
      this.users = response;
      this.customers = this.users.value;
      this.collectionSize = this.customers.length;
      console.log(this.users);
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
  
SearchCustomer(filter: any) {
    console.log(890)
    console.log(filter.value)
    this.info.getCustomerSearch(filter.value).subscribe((response) => {
      console.log(" Customer filter response is...", response);
      this.users = response;
      this.customers = this.users.value;
      this.collectionSize = this.customers.length;
      console.log(this.users);
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
  
  updateValue(data: any) {
    console.log("inupdate", data);
    this.info.AssignCustWithAccount(data);
  }
  getEditCustomer(data: any) {

    this.myEditcust.controls.cust_id.setValue(data.cust_id);
    this.myEditcust.controls.FirstName.setValue(data.firstname);
    this.myEditcust.controls.LastName.setValue(data.lastname);
    this.myEditcust.controls.DateOfBirth.setValue(data.dob);
    this.myEditcust.controls.MaritalStatus.setValue(data.maritalstatus);
    this.myEditcust.controls.Mobile.setValue(data.mobile);
    this.myEditcust.controls.Phone.setValue(data.phone);
    this.myEditcust.controls.City.setValue(data.city);
    this.myEditcust.controls.State.setValue(data.state);
    this.myEditcust.controls.Country.setValue(data.country);
    this.myEditcust.controls.ZIPCode.setValue(data.zipcode);
    this.myEditcust.controls.Address1.setValue(data.address1);
    this.myEditcust.controls.Address2.setValue(data.address2);
    this.myEditcust.controls.EmailId.setValue(data.emailid);

    if (this.editresponse === false) {
      this.editresponse = true
    }
    else {
      this.editresponse = false
    }
  }
  EditCustomer(data: any) {
    this.EditData = data.value;
    console.log("before",data.value)

    this.EditData['ActionType'] = "UPDATE";
    this.EditData['Cust_id'] = this.myEditcust.controls.cust_id.value;
    
    this.UpdPayload['customerdetails'] = this.EditData;
    console.log("after",this.EditData);
    this.info.AddCustomer(this.UpdPayload).subscribe((response) => {

      console.log("Customer update response is...", response);
      // this.users = [response];
      // console.log(this.users.Newvalue);
      this.info.getAllCustomers().subscribe((response: any = []) => {

        console.log("All Customers  response is...", response);
        this.users = response;
        if(this.users.statusvalue === true){

        }
        this.customers = this.users.value;
      this.collectionSize = this.customers.length;
        console.log("users", this.users);
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
      this.body = "updated of custid " + this.myEditcust.controls.cust_id.value;
      this.total = "updated is successful"
      this.info.getsuccess(this.body,this.total);
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
  CustomerPagination() {
    this.customers = this.users.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize,
    );
    this.collectionSize= this.users.length;
    console.log(this.users);
}
  DeleteCustomer(data:any){
  this.custId = {"cust_id": data}
  console.log(this.custId)
   this.info.deleteCustomer(this.custId).subscribe((response)=>{
     console.log(" Customer delete response is...", response);
     this.jsonres = response;
     console.log(this.jsonres);
 },(error) => {
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

}
