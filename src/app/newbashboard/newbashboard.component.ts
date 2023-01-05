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
  expanded: boolean = false;
   Navimenu(Data:any){
    this.router.navigate(['/Data']);
   }
}
