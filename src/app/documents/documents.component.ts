import { Component,OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  users: any;
  constructor(private info:InformationService, private route:ActivatedRoute ){}
  documents = [
  {custid: 1,
    Docid: 101,
    DocDate: "1/1/2023",
    DocDesc : "Welcome letter",
    DocType : "pdf",
    referid: "UIE2001"
  },
  {custid: 1,
    Docid: 101,
    DocDate: "1/1/2023",
    DocDesc : "Welcome letter",
    DocType : "pdf",
    referid: "UIE2001"
  },
  {custid: 1,
    Docid: 101,
    DocDate: "1/1/2023",
    DocDesc : "Welcome letter",
    DocType : "pdf",
    referid: "UIE2001"
  },
  {custid: 1,
    Docid: 101,
    DocDate: "1/1/2023",
    DocDesc : "Welcome letter",
    DocType : "pdf",
    referid: "UIE2001"
  },
  {custid: 1,
    Docid: 101,
    DocDate: "1/1/2023",
    DocDesc : "Welcome letter",
    DocType : "pdf",
    referid: "UIE2001"
  },
  {custid: 1,
    Docid: 101,
    DocDate: "1/1/2023",
    DocDesc : "Welcome letter",
    DocType : "pdf",
    referid: "UIE2001"
  },
  {custid: 1,
    Docid: 102,
    DocDate: "1/2/2023",
    DocDesc : "Thank you letter",
    DocType : "pdf",
    referid: "UIE2001"
  },
  {custid: 1,
    Docid: 103,
    DocDate: "1/3/2023",
    DocDesc : "Welcome Offer letter",
    DocType : "pdf",
    referid: "UIE2001"
  }
  ]
  addresponse:any = false;
   document:any;
  //  adddoc(){
  //   this.info.getDocument().pipe(map((data:any) => {
  //     let emptyArray: any = [];
  //     for(const key in data){
  //       if(data.hasOwnProperty(key)){
  //         emptyArray.push(data[key]);
  //       }
  //     }
  //     return emptyArray
  //    })).subscribe(x => {
  //    this.users = x[0]
     
     
  //   }
  //   );
  //   console.log(this.users)
  //  }
  ngOnInit() {
   
    this.route.params.subscribe((x:Params) => {
     console.log(x)
    })
  }
  adddoc(){
    
    this.info.addDocument(this.documents).subscribe(x => console.log(x));
    console.log(90)
  }
 
  download(){
    console.log(90)
  }
  view(){
    console.log("view")
  }
  getvaule(data:any){
    console.log(data)
  }
  reponse(){
    if (this.addresponse === false){
      this.addresponse = true
    }
    else{
      this.addresponse = false
    }
  }
}
