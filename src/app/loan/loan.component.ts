import { Component } from '@angular/core';
import { InformationService } from '../information.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {
  get: any;
  check: any;
  constructor(private info:InformationService,private route:ActivatedRoute ){}
  addresponse:any = true;
  addwithdraw:any;
  getvaule(data:any){
    
    this.addwithdraw = data.value
  
    //this.info.addProducts(this.addwithdraw).subscribe(x => console.log(x))
  
   }
   ngOnInit(){
    this.route.queryParams.subscribe((x => this.get = x['general']))
    if (this.get === "Loans"){
      this.check = true;
    }
    else {
      this.check = false;
    }
    }
    getSearch(search:any){
      
    }
    
}
