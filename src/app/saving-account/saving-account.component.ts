import { Component, ViewEncapsulation } from '@angular/core';
import { InformationService } from '../information.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-saving-account',
  templateUrl: './saving-account.component.html',
  styleUrls: ['./saving-account.component.css'],
  encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.dark-modal .modal-content {
				background-color: #292b2c;
				color: white;
			}
			.dark-modal .close {
				color: white;
			}
			.light-blue-backdrop {
				background-color: #5cb3fd;
			}
		`,
	],
})
export class SavingAccountComponent {


  constructor(private info:InformationService, modalService: NgbModal){}
  addresponse:any = true;
  reson:any = true;
  addwithdraw:any;

  
  getvaule(data:any){
    
    this.addwithdraw = data.value
  }

  
 // this.info.addProducts(this.addwithdraw).subscribe(x => console.log(x))
    
}
