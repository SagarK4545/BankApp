import { Component,OnInit } from '@angular/core';
import { InformationService } from '../information.service';


@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent implements OnInit {

  active = 1;
  constructor(private info:InformationService){}
  addresponse:any = true;
  addwithdraw:any;
  getcustomerdetail:any;
 ngOnInit(){
 this.getcustomerdetail = this.info.CustomerWithAccount
 }
  getvaule(data:any){
    
    this.addwithdraw = data.value
    // if(this.filterjson.status === "active"){
    //   this.active = true;
    // }
    // console.log(this.active);
  
 // this.info.addProducts(this.addwithdraw).subscribe(x => console.log(x))
  
   }
}
