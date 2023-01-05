import { JsonPipe } from '@angular/common';
import { JsonpInterceptor } from '@angular/common/http';
import { Component ,Input} from '@angular/core';
import { InformationService } from '../information.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DateFilter } from 'ag-grid-community';

let responsejson:object = [];



 

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  
  styleUrls: ['./view.component.css']
})

let loginDate:any
export class ViewComponent {
  constructor(private infro:InformationService){}
  addresponse:any = false;
  addwithdraw:any;
  jsonres:any = [];
  
  getcurrentdate(){
    let now:any
    let loginDate:any
    now = new Date();
  loginDate = now.toLocaleDateString;
  return loginDate;
  }
  



  getvaule(data:any){
    console.log("getvalue"); 
    this.addwithdraw = data.value
    console.log(this.addwithdraw)
    
    this.infro.addProducts(this.addwithdraw).subscribe((response)=>{
      console.log("response is...", response);
      //console.log(this.addwithdraw.getData.Value);
      this.jsonres = response;
      console.log(this.jsonres.balance);
      
      console.log(this.addresponse);
  
      console.log("responsejson", responsejson);
  },(error) => {
      console.log('error is ', error)
  })
  
   this.addresponse = true;
 
     }


   
}

