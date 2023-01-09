import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {

  constructor(private infro:InformationService, modalService: NgbModal){}
  addresponse:any = true;
  addwithdraw:any;
  response:any = false;
  jsonres:any = []


  ackresponse(){
    if (this.response === false){

      this.response = true

    }

    else{

      this.response = false

    }

  }


  getvalue(data:any){

    console.log("getvalue");

    this.addwithdraw = data.value
    
    console.log(this.addwithdraw)

   

    this.infro.addProducts(this.addwithdraw).subscribe((response)=>{

      console.log("response is...", response);

      //console.log(this.addwithdraw.getData.Value);

      this.jsonres = response;

      console.log(this.jsonres.balance);

     

      console.log(this.addresponse);

 

      

  },(error) => {

      console.log('error is ', error)

  })

 

   this.addresponse = true;

 

     }



}
