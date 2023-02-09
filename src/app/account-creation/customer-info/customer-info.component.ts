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

  addresponse: any = false;
  filterjson: any;
  filter: any;
  EditData: any;
  jsonres: any;
  variable: any = false;
  editresponse: any = false;
  CustomerEdit: any;
  UpdPayload:any = {};
  myFilterCust = this.form.group({
    cust_id: ['', Validators.required],
    firstname: ['', Validators.required] ,
    status: ['', Validators.required]
   });
  
  myEditcust = this.form.group({
    cust_id: ['', Validators.required],
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

  // users = [
  //   {
  //     cust_id : 1,
  //     firstname : "sagar",
  //     accounttype : "loan",
  //     accsubtype : "vehicle",
  //     acctnum : 123,
  //     status : "active",
  //     balance : 100,
  //     balanceamount : 200,

  //   },
  //   {
  //     cust_id : 2,
  //     firstname : "sagar1",
  //     accounttype : "loan",
  //     accsubtype : "vehicle",
  //     acctnum : 123,
  //     status : "active",
  //     balance : 100,
  //     balanceamount : 200,

  //   },
  //   {
  //     cust_id : 3,
  //     firstname : "sagar2",
  //     accounttype : "loan",
  //     accsubtype : "vehicle",
  //     acctnum : 123,
  //     status : "active",
  //     balance : 100,
  //     balanceamount : 200,

  //   },
  //   {
  //     cust_id : 4,
  //     firstname : "sagar3",
  //     accounttype : "loan",
  //     accsubtype : "vehicle",
  //     acctnum : 123,
  //     status : "active",
  //     balance : 100,
  //     balanceamount : 200,

  //   },
  //   {
  //     cust_id : 5,
  //     firstname : "sagar4",
  //     accounttype : "loan",
  //     accsubtype : "vehicle",
  //     acctnum : 123,
  //     status : "active",
  //     balance : 100,
  //     balanceamount : 200,

  //   },
  //   {
  //     cust_id : 6,
  //     firstname : "sagar5",
  //     accounttype : "loan",
  //     accsubtype : "vehicle",
  //     acctnum : 123,
  //     status : "active",
  //     balance : 100,
  //     balanceamount : 200,

  //   },
  //   {
  //     cust_id : 7,
  //     firstname : "sagar6",
  //     accounttype : "loan",
  //     accsubtype : "vehicle",
  //     acctnum : 123,
  //     status : "active",
  //     balance : 100,
  //     balanceamount : 200,

  //   },
  //   {
  //     cust_id : 8,
  //     firstname : "sagar7",
  //     accounttype : "loan",
  //     accsubtype : "vehicle",
  //     acctnum : 123,
  //     status : "active",
  //     balance : 100,
  //     balanceamount : 200,

  //   },
  //   {
  //     cust_id : 9,
  //     firstname : "sagar8",
  //     accounttype : "loan",
  //     accsubtype : "vehicle",
  //     acctnum : 123,
  //     status : "active",
  //     balance : 100,
  //     balanceamount : 200,

  //   },
  //   {
  //     cust_id : 10,
  //     firstname : "sagar9",
  //     accounttype : "loan",
  //     accsubtype : "vehicle",
  //     acctnum : 123,
  //     status : "active",
  //     balance : 100,
  //     balanceamount : 200,

  //   },
  //   {
  //     cust_id : 11,
  //     firstname : "sagar10",
  //     accounttype : "loan",
  //     accsubtype : "vehicle",
  //     acctnum : 123,
  //     status : "active",
  //     balance : 100,
  //     balanceamount : 200,

  //   }

  //  ]
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
      console.log("users", this.users);
    }, (error) => {
      console.log('error is ', error)

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

    }
    );
  }

  filterCustomer(filter: any) {
    console.log(890)
    console.log(filter.value)
    this.info.getCustomerFilterData(filter.value).subscribe((response) => {
      console.log(" Customer filter response is...", response);
      this.users = response;
      console.log(this.users);
    }, (error) => {
      console.log('error is ', error)

    })
  }
  
SearchCustomer(filter: any) {
    console.log(890)
    console.log(filter.value)
    this.info.getCustomerSearch(filter.value).subscribe((response) => {
      console.log(" Customer filter response is...", response);
      this.users = response;
      console.log(this.users);
    }, (error) => {
      console.log('error is ', error)

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
    this.UpdPayload['customerdetails'] = this.EditData;
    console.log("after",this.EditData);
    this.info.AddCustomer(this.UpdPayload).subscribe((response) => {

      console.log("Customer update response is...", response);
      this.users = [response];
      console.log(this.users);
    }, (error) => {
      console.log('error is ', error)

    });

  }

}
