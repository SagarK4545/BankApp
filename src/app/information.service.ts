import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InformationService {
  respon: any

  constructor(private httpresponse: HttpClient) { }

 
  // starts Document Master related methods
  addDocumentsMaster(Data: any) {
    return this.httpresponse.post('http://localhost:3100/doc/addDoc', Data)
  }
  getDocumentsMaster() {
    return this.httpresponse.get('http://localhost:3100/doc/document')
  }
  filterDocumentMaster(data: any) {
    return this.httpresponse.post('http://localhost:3100/doc/docfilter', data)
  }
  editDocumentMaster(data: any) {
    return this.httpresponse.post('http://localhost:3100/doc/updateDoc', data)
  }
  deleteDocumentMaster(data: any) {
    return this.httpresponse.post('http://localhost:3100/doc/Deletedoc', data)
  }
  // ends documents master methods


  //starts document customer ralated method
  filterDocumentCustomer(data: any) {
    return this.httpresponse.post('http://localhost:3100/communication/getalldocumentbyfilter', data)
  }
  getDocuments(data:any) {
  
    return this.httpresponse.post('http://localhost:3100/communication/getdocumentbyid', data)
  }
  //ends document customer related methods
  
 // start Withdraw related methods
 getFilterData(data:any){
  return this.httpresponse.post('http://localhost:3100/customer/getcustomerdetailbalanceinfo',data)
}
addWithdraw(data: any) {
  return this.httpresponse.post('http://localhost:3100/TXN/Accountwithdraw', data)
}
//end withdraw related methods

  //deposit amount start here 
  addDeposit(data:any){
    return this.httpresponse.post('http://localhost:3100/TXN/Accountdeposite', data)
  }
  // getFilterData(data:any){
  //   return this.httpresponse.get('http://20.192.1.163:3100/TXN/history', data)
  // }
  //deposit amount ends here
  
  

  

  getCustomer(data: any) {
    return this.httpresponse.get('http://localhost:8086/TXN/players', data)
  }

  getAllCustomers() {

    return this.httpresponse.get('http://20.192.1.163:3100/customer/customertxnhistory')

  }

  
  addDocument(data: any) {
    return this.httpresponse.post('https://angularjk-f95c0-default-rtdb.firebaseio.com/DocFile.json', data)
  }
  getDocument() {
    return this.httpresponse.get('https://angularjk-f95c0-default-rtdb.firebaseio.com/DocFile.json')
  }

  
 

  getCustomerFilterData(data: any) {

    return this.httpresponse.get('http://20.192.1.163:3100/TXN/history', data)

  }
  fromotherscreen() {
    this.respon = true
  }

}
