import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  filter: any;

  constructor(private infro:InformationService, modalService: NgbModal){}
  addresponse: any = true;
  adddeposite: any;
  response: any = false;
  jsonres: any = []
  filterjson:any = [];
  Deposit:any = "Deposit";


  ackresponse(){
    if (this.response === false){

      this.response = true

    }

    else{

      this.response = false

    }

  }


  getvalue(data:any){
    this.adddeposite = data.value

    console.log(this.adddeposite)

    this.infro.addDeposit(this.adddeposite).subscribe((response) => {

      console.log("response is...", response);

      //console.log(this.addwithdraw.getData.Value);
      this.jsonres = response;
      console.log(this.jsonres)

      console.log(this.jsonres.balance);
      console.log(this.addresponse);

    }, (error) => {

      console.log('error is ', error)

    })

     }
     getSearch(data: any) {
      this.filter = data.value
      console.log(data.value)
  
      // if (data.value.phone_number.length === 10){
  
      this.infro.getFilterData(this.filter).subscribe((response) => {
  
        console.log("response is...", response);
       
        this.filterjson = response;
  
        console.log(this.filterjson.balance);
  
      }, (error) => {
  
        console.log('error is ', error)
  
      })
    }



}
