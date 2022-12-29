import { Component } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private infro:InformationService){}
  addresponse:any = true;
  addwithdraw:any;
  getvaule(data:any){
    
    this.addwithdraw = data.value
  
  this.infro.addProducts(this.addwithdraw).subscribe(x => console.log(x))
  
   }
}
