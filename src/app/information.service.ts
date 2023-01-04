import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private httpresponse : HttpClient) { }



  addProducts(data:any){
    return this.httpresponse.post('http://localhost:8086/TXN/Accountwithdraw',data)
  }

  getCustomer(data:any){
    return this.httpresponse.get('http://localhost:8086/TXN/players',data)
  }
  
}
