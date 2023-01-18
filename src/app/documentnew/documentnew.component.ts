import { Component ,OnInit} from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-documentnew',
  templateUrl: './documentnew.component.html',
  styleUrls: ['./documentnew.component.css']
})
 
export class DocumentnewComponent {
 
 constructor(private info:InformationService){}
 inputparam = {"custid":1};
 jsonres:any = []
 filterres:any = []
 filterdata:any;
 getDocument:any ;
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
  response : any = false;
  reponse(){
    if (this.response === false){
      this.response = true
    }
    else{
      this.response = false
    }
    console.log(this.response)
    

  }
  filterDocument(filter:any){
    console.log(890)
    this.filterdata = filter.value;
    console.log(this.filterdata)
    this.info.filterDocumentCustomer(this.filterdata).subscribe((response)=>{
    console.log(" Document filter response is...", response);
    this.filterres = response;
    console.log(this.filterres.DocDate);
},(error) => {

    console.log('error is ', error)
})
 console.log(1000)
}

 getvalue(){
  this.getDocument = {custId:"1"}
    console.log(this.getDocument)
  this.info.getDocuments(this.getDocument).subscribe((response)=>{

    console.log(" Document response is...", response);
     this.jsonres = response;
    console.log(this.jsonres); 
},(error) => {

    console.log('error is ', error)

})
 }
  addresponse(addresponse: any) {
    throw new Error('Method not implemented.');
  }
 
}
