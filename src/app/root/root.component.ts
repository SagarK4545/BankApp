import { Component,OnInit } from '@angular/core';
import { RootService } from './root.service';

import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private rootService : RootService) { }

  ngOnInit() {
    this.rootService.getAPIData().subscribe((response)=>{
        console.log('response is ', response)
    },(error) => {
        console.log('error is ', error)
    })

    this.rootService.postAPIData().subscribe((response: any)=>{
      console.log('response from post data is ', response);
    },(error: any)=>{
      console.log('error during post is ', error)
    })
  }

  


}
