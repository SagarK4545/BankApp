import { Component } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-saving-account',
  templateUrl: './saving-account.component.html',
  styleUrls: ['./saving-account.component.css']
})
export class SavingAccountComponent {
  constructor(private info:InformationService){}
  addresponse:any = true;
  addwithdraw:any;
  getvaule(data:any){
    
    this.addwithdraw = data.value
  
 // this.info.addProducts(this.addwithdraw).subscribe(x => console.log(x))
  
   }
}
