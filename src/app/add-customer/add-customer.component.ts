import { Component } from '@angular/core';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  constructor(private info: InformationService, private route:Router) { }
  addresponse: any = true;
  customer: any;
  Custid: any;
  body:any;
  title:any;
  phoneNumberPattern = "^\d{10}$";


  AddCustomer(data: any) {

    this.customer = data.value

    this.customer['ActionType'] = "ADD";

    console.log(this.customer)

    this.info.AssignCustomerPayLoad(this.customer);
    this.body = "customer details saved successful " ;
      this.title = ""
      this.info.getsuccess(this.body,this.title);

  }
  changepage(data:any){
    this.AddCustomer(data) ;
    this.route.navigate(['/AddSavings']);
  }

}