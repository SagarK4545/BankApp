import { Component } from '@angular/core';
import { InformationService } from '../information.service';


@Component({
  selector: 'app-deposite',
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
