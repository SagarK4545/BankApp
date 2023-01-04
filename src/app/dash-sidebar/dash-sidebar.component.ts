import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dash-sidebar',
  templateUrl: './dash-sidebar.component.html',
  styleUrls: ['./dash-sidebar.component.css']
})
export class DashSidebarComponent {
@Input() headerValue :any = false ;
@Output() sidebarResponse:EventEmitter<any> = new EventEmitter();

listItem = [
  {
    icon: 'fa-solid fa-inbox',
    name: "CustomerInfo"
  },
  {
    icon: 'fa-sharp fa-solid fa-plus',
    name: "Add Account"
  },
  {
    icon: 'fa-sharp fa-solid fa-piggy-bank',
    name: "Saving"
  },
  {
    icon: 'fa-duotone fa-money-bill',
    name: "Loan"
  },
  {
    icon: 'fa-sharp fa-solid fa-money-bill-transfer',
    name: "WithDraw"
  },
  {
    icon: 'fa-solid fa-wallet',
    name: "Deposit"
  },
]
getReponse(data:any){
  console.log(data);
  this.sidebarResponse.emit(data);
}

}
