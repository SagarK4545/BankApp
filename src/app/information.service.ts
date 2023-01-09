import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InformationService {
  respon:any

  constructor(private httpresponse : HttpClient) { }



  addProducts(data:any){
    return this.httpresponse.post('http://localhost:8086/TXN/Accountwithdraw',data)
  }

  getCustomer(data:any){
    return this.httpresponse.get('http://localhost:8086/TXN/players',data)
  }
  
  getAllCustomers(){

    return this.httpresponse.get('http://20.192.1.163:3100/customer/customertxnhistory')

  }

  getCustomerFilterData(data:any){

    return this.httpresponse.get('http://20.192.1.163:3100/TXN/history', data)

  }

  fromotherscreen(){
    this.respon = true
  }

}
