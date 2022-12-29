import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private httpresponse : HttpClient) { }

  addProducts(data:any){
    return this.httpresponse.put('https://angularjk-f95c0-default-rtdb.firebaseio.com/withdraw.json',data)
  }
}
