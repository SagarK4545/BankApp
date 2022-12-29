import { Component } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {
  constructor(private info:InformationService){}
  addresponse:any = true;
  addwithdraw:any;
  getvaule(data:any){
    
    this.addwithdraw = data.value
  
 // this.info.addProducts(this.addwithdraw).subscribe(x => console.log(x))
  
   }
}
