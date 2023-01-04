import { JsonPipe } from '@angular/common';
import { JsonpInterceptor } from '@angular/common/http';
import { Component ,Input} from '@angular/core';
import { InformationService } from '../information.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

let responsejson = {};

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
    console.log("getvalue"); 
    this.addwithdraw = data.value
    console.log(this.addwithdraw)
    
    this.infro.addProducts(this.addwithdraw).subscribe((response)=>{
      
      this.addwithdraw.getData.value = response;
      
      console.log('response is ', this.addwithdraw.getData.value);
      responsejson = this.addwithdraw.getData.value;
      console.log("responsejson", responsejson);
  },(error) => {
      console.log('error is ', error)
  })
  
   }

   responsejson = {"txnid":1234,"Balance":20000};

   
}

