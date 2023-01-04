import { Component } from '@angular/core';
import { InformationService } from '../information.service';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { TransactionsComponent } from '../transactions/transactions.component';
import { SavingAccountComponent } from '../saving-account/saving-account.component';

@Component({
  selector: 'app-deposite',
  standalone : true,
  imports: [NgbNavModule,SavingAccountComponent,TransactionsComponent],
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent {

  active = 1;
  constructor(private info:InformationService){}
  addresponse:any = true;
  addwithdraw:any;
  getvaule(data:any){
    
    this.addwithdraw = data.value
  
 // this.info.addProducts(this.addwithdraw).subscribe(x => console.log(x))
  
   }
}
