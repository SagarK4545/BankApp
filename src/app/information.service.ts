import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService} from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class InformationService {
  respon: any

  constructor(private httpresponse: HttpClient,private toastr:ToastrService) { }

  
  customerLocal:any;
  custid:any;
  AddCustomerPayload:any = {};
  
  CustomerWithAccount:any;
  

  AssignCustomerPayLoad(data:any){
    this.AddCustomerPayload["customerdetails"] = data;
    console.log(this.AddCustomerPayload);
  }
  AssignAccountPayLoad(data:any){
    this.AddCustomerPayload["Account"] = data ;
    console.log(this.AddCustomerPayload);
  }

  AssignCustId(data:any){
    console.log("before", this.custid);
    this.custid = data;
    console.log("after", this.custid);
  }
  AssignCustWithAccount(data:any){
    console.log("before", this.CustomerWithAccount);
    this.CustomerWithAccount = data;
    console.log("after", this.CustomerWithAccount);
  }
  // getAllTransactions(data:any){
  //   return this.httpresponse.post('http://localhost:3100/customer/history',data)
  //  //return this.httpresponse.post('http://20.192.1.163:3100/customer/history',data)
  // }
  
  getLoanFilterTransactions(data:any){
   return this.httpresponse.post('http://20.192.1.163:3100/customer/loanfilter',data)
  //return this.httpresponse.post('http://20.192.1.163:3100/customer/history',data)
 }
 getSavingFilterTransactions(data:any){
   return this.httpresponse.post('http://20.192.1.163:3100/customer/savingfilter',data)
  //return this.httpresponse.post('http://20.192.1.163:3100/customer/history',data)
 }
  

  getCustomer(data:any){
    // return this.httpresponse.get('http://localhost:3100/Customers/GetCustomerById/' + data)
    return this.httpresponse.get('http://20.192.1.163:3100/Customers/GetCustomerById/' + data)
  }
  
  AddCustomer(data:any){
    console.log("in service",data);
    return this.httpresponse.post('http://20.192.1.163:3100/customerinfo/CustomerAdd',data)
  }
  deleteCustomer(data:any){
    //  return this.httpresponse.get('http://localhost:3100/customer/customertxnhistory')
     return this.httpresponse.post('http://20.192.1.163:3100/customerinfo/DeleteCustomer', data)
    }
  
  AddSavings(data:any){
    // console.log("insavings", this.custid)
    // data["custId"] = this.custid;
    //  console.log("inside service", data);
    // return this.httpresponse.post('http://localhost:3100/customer/createsavingaccount',data)
    return this.httpresponse.post('http://20.192.1.163:3100/customer/createsavingaccount',data)
  }
  
  
  getAllCustomers(){
  //  return this.httpresponse.get('http://localhost:3100/customer/customertxnhistory')
   return this.httpresponse.get('http://20.192.1.163:3100/customer/customertxnhistory')
  }
  getAccountType(){
    // return this.httpresponse.get('http://localhost:3100/TXN/getAllAccountType')
    return this.httpresponse.get('http://20.192.1.163:3100/TXN/getAllAccountType')
   }
   getAllTransactions(data:any){
     return this.httpresponse.post('http://20.192.1.163:3100/customer/history',data)
    // return this.httpresponse.post('http://20.192.1.163:3100/customer/history',data)
   }
   
   
  getCustomerFilterData(data1:any){
    console.log("in filter service1 data1", data1);
    // return this.httpresponse.post('http://localhost:3100/customer/customertxnhistoryfilter', data1)
    return this.httpresponse.post('http://20.192.1.163:3100/customer/customertxnhistoryfilter', data1)
  }

  getCustomerSearch(data1:any){
     console.log("in filter service1 data1", data1);
     // return this.httpresponse.post('http://localhost:3100/customer/getcustomertxnbycustid', data1)   
     return this.httpresponse.post('http://20.192.1.163:3100/customer/getcustomertxnbyname', data1)
     }


  // starts Document Master related methods
  addDocumentsMaster(Data: any) {
    return this.httpresponse.post('http://20.192.1.163:3100/doc/addDoc', Data)
  }
  getDocumentsMaster() {
    return this.httpresponse.get('http://20.192.1.163:3100/doc/document')
  }
  filterDocumentMaster(data: any) {
    return this.httpresponse.post('http://20.192.1.163:3100/doc/docfilter', data)
  }
  editDocumentMaster(data: any) {
    return this.httpresponse.post('http://20.192.1.163:3100/doc/updateDoc', data)
  }
  deleteDocumentMaster(data: any) {
    return this.httpresponse.post('http://20.192.1.163:3100/doc/Deletedoc', data)
  }
  rapidFileterDocumentMaster(data:any){
    return this.httpresponse.post('http://20.192.1.163:3100/doc/docRapidfilter',data)
  }
  // ends documents master methods


  //starts document customer ralated method
  filterDocumentCustomer(data: any) {
    return this.httpresponse.post('http://20.192.1.163:3100/communication/getalldocumentbyfilter', data)
  }
  getDocuments(data:any) {
  
    return this.httpresponse.post('http://20.192.1.163:3100/communication/getdocumentbyid', data)
  }
  rapidFilter(data:any){
    return this.httpresponse.post('http://20.192.1.163:3100/doc/docCustRapidfilter', data)
  }
  //ends document customer related methods
  
 // start Withdraw related methods
 getFilterData(data:any){
  return this.httpresponse.post('http://20.192.1.163:3100/customer/getcustomerdetailbalanceinfo',data)
}
addWithdraw(data: any) {
  return this.httpresponse.post('http://20.192.1.163:3100/TXN/Accountwithdraw', data)
}
//end withdraw related methods

  //deposit amount start here 
  addDeposit(data:any){
    return this.httpresponse.post('http://20.192.1.163:3100/TXN/Accountdeposite', data)
  }
  // getFilterData(data:any){
  //   return this.httpresponse.get('http://20.192.1.163:3100/TXN/history', data)
  // }
  //deposit amount ends here
  
  //loan start here
  getloandetails(data:any){
    return this.httpresponse.post('http://20.192.1.163:3100/customer/getcustomerloandetail',data)
  }

  getsavingdetails(data:any){
  
     return this.httpresponse.post('http://20.192.1.163:3100/customer/getsavingdetails',data)
    // return this.httpresponse.post('http://20.192.1.163:3100/customer/getsavingdetails',data)
  }
  AddLoan(data:any){
    return this.httpresponse.post('http://20.192.1.163:3100/loan/createLoanAccount',data)
  }

  
  

  

 

  

  
  addDocument(data: any) {
    return this.httpresponse.post('https://angularjk-f95c0-default-rtdb.firebaseio.com/DocFile.json', data)
  }
  getDocument() {
    return this.httpresponse.get('https://angularjk-f95c0-default-rtdb.firebaseio.com/DocFile.json')
  }

  // methods for toastr
    getsuccess(body:any,title:any){
      this.toastr.success(body,title);
    }
    geterror(body:any,title:any){
      this.toastr.error(body,title);
    }
  
 

 
  fromotherscreen() {
    this.respon = true
  }

}
