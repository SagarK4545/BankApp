import { Component } from '@angular/core';
import { InformationService } from '../information.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  constructor(private info:InformationService){}
  addresponse:any = true;
  addwithdraw:any;
  getvaule(data:any){
    
    this.addwithdraw = data.value
  
 // this.info.addProducts(this.addwithdraw).subscribe(x => console.log(x))
    this. info.getCustomer(data).subscribe((x) => console.log(x))
   }
}