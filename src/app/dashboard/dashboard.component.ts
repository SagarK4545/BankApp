import { Component, TemplateRef, ViewEncapsulation,Input,Output,EventEmitter } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CustomerFilterComponent } from '../customer-filter/customer-filter.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {

  @Input() headerValue :any = false ;
@Output() sidebarResponse:EventEmitter<any> = new EventEmitter();

  closeResult: string;

  constructor(private offcanvasService: NgbOffcanvas) {
    this.closeResult = "";
  }
  openStaticBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: 'static' });
	}

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

  takeResponse(sidebarResponse:any){
    this.getSidebarResponse = sidebarResponse;

  }

  getReponse(data:any){
    console.log(data);
    this.sidebarResponse.emit(data);
  }
  
  

  reponse : any = false;
  getSidebarResponse : any;
  getResponse(){
    this.reponse = !this.reponse;
    console.log(this.reponse)
  }
  
  datasets = [
    {
      label: 'Traffic',
      data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
      backgroundColor: [
        'rgba(63, 81, 181, 0.5)',
        'rgba(77, 182, 172, 0.5)',
        'rgba(66, 133, 244, 0.5)',
        'rgba(156, 39, 176, 0.5)',
        'rgba(233, 30, 99, 0.5)',
        'rgba(66, 73, 244, 0.4)',
        'rgba(66, 133, 244, 0.2)',
      ],
    },
  ];

  labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];



  logout(){
    
  }
}
