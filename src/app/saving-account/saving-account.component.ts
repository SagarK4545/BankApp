import { Component,OnInit, ViewEncapsulation } from '@angular/core';
import { InformationService } from '../information.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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


  constructor(private info:InformationService, modalService: NgbModal,private route:ActivatedRoute){}
  addresponse:any = true;
  reson:any = true;
  addwithdraw:any;
  get:any;
  check:any;

  
  getvaule(data:any){
    
    this.addwithdraw = data.value
  }
  
  ngOnInit(){
	this.route.queryParams.subscribe((x => this.get = x['general']))
	if (this.get === "Saving"){
		this.check = true;
	}
	else{
		this.check = false;
	}
  }
  getSearch(search:any){
	
  }

  
 // this.info.addProducts(this.addwithdraw).subscribe(x => console.log(x))
    
}
