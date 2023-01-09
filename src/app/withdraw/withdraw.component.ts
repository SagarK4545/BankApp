import { Component } from '@angular/core';
import { InformationService } from '../information.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})


export class WithdrawComponent {

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

  //this.info.addProducts(this.addwithdraw).subscribe(x => console.log(x))

