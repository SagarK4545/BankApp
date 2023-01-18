import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newbashboard',
  templateUrl: './newbashboard.component.html',
  styleUrls: ['./newbashboard.component.css'],
  
  animations: [
    trigger('slidein', [
      transition(':enter', [
        // when ngif has true
        style({ transform: 'translateX(-100%)' }),
        animate(250, style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        // when ngIf has false
        animate(250, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class NewbashboardComponent {
  constructor(private router:Router){
    let Data = "";
  }
  listItem = [
    {
      icon: 'fa-solid fa-inbox',
      name: "Customer Info"
    },
    {
      icon: 'fa-sharp fa-solid fa-plus',
      name: "document"
    },
    {
      icon: 'fa-sharp fa-solid fa-piggy-bank',
      name: "Savings"
    },
    {
      icon: 'fa-solid fa-money-bill',
      name: "Loans"
    },
    {
      icon: 'fa-sharp fa-solid fa-plus',
      name: "Customerdetails"
    },
    {
      icon: 'fa-sharp fa-solid fa-money-bill-transfer',
      name: "Withdrawals"
    },
    {
      icon: 'fa-solid fa-money-bill',
      name: "Add Customer"
    },
    {
      icon: 'fa-solid fa-wallet',
      name: "Deposits"
    },
  ]
  expanded: boolean = false;
   Navimenu(Data:any){
    this.router.navigate(['/Data']);
   }
   menudo(){
    this.expanded = false;
    console.log(this.expanded)
   }
}
