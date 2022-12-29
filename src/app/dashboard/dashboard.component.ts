import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  reponse : any = false;
  getSidebarResponse : any;
  getResponse(){
    this.reponse = !this.reponse;
    console.log(this.reponse)
  }
  takeResponse(sidebarResponse:any){
    this.getSidebarResponse = sidebarResponse;

  }

  logout(){
    
  }
}
