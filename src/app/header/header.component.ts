import { Component, OnInit } from '@angular/core';

import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[MsalService]
})
export class HeaderComponent implements OnInit{
  constructor(private msalService:MsalService){
    
  }
  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(

      async res=>{

        if(res != null && res.account != null){

          this.msalService.instance.setActiveAccount(res.account)

          

        }

      }

    )
  }

  isLoggedIn():boolean{

    return this.msalService.instance.getActiveAccount()!=null

  }



  login(){
    debugger

   

  this.msalService.loginRedirect();

    // this.msalService.loginPopup().subscribe((response:AuthenticationResult)=>{

    //   this.msalService.instance.setActiveAccount(response.account)

     

    // })

  }



  logout(){

    // debugger

    // console.log('inside logout')

    // this.msalService.logout();

    // console.log('inside logout2')

    this.msalService.logoutRedirect({

      postLogoutRedirectUri: 'http://localhost:4200/'

    });

  }
}
