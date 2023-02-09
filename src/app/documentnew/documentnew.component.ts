import { Component ,OnInit} from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-documentnew',
  templateUrl: './documentnew.component.html',
  styleUrls: ['./documentnew.component.css']
})
 
export class DocumentnewComponent {
  CustData: any;
  error: any;
  errormes: any;
  title: any;
  body: any;
 
 constructor(private info:InformationService){}
 inputparam = {"custid":1};
 jsonres:any = []
 filterres:any = []
 filterdata:any;
 getDocument:any = { };
 page=1;
    collectionSize:any;
    pageSize = 4;
  documentlist:any = []

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

  ngOnInit(){
    this.CustData=this.info.CustomerWithAccount;
    console.log("inside",this.CustData);
this.getDocument["custId"] = 1036;
console.log(this.getDocument)
this.info.getDocuments(this.getDocument).subscribe((response)=>{

  console.log(" Document response is...", response);
   this.jsonres = response;
   this.documentlist = this.jsonres.value;
      this.collectionSize = this.documentlist.length;
  console.log(this.documentlist.Docid, "--",this.documentlist.Docname); 
},(error) => {

  console.log('error is ', error);
  this.error = error.error.statusvalue;
      this.errormes = error.error.StatusMessage
      console.log(this.error) 
      if (this.error === false ){
        this.title = "something went wrong";
        this.body = this.errormes;
        this.info.geterror(this.body,this.title)
      
        
      }

})

  }
  filterDocument(filter:any){
    console.log(890)
    this.filterdata = filter.value;
    console.log(this.filterdata)
    this.info.filterDocumentCustomer(this.filterdata).subscribe((response)=>{
    console.log(" Document filter response is...", response);
    this.jsonres = response;
    this.documentlist = this.jsonres;
      this.collectionSize = this.documentlist.length;
    console.log(this.jsonres.DocDate);
},(error) => {

    console.log('error is ', error);
    this.error = error.error.statusvalue;
      this.errormes = error.error.StatusMessage
      console.log(this.error) 
      if (this.error === false ){
        this.title = "something went wrong";
        this.body = this.errormes;
        this.info.geterror(this.body,this.title)
      
        
      }
})
 console.log(1000)
}

 getvalue(){
  this.getDocument = {custId:"688"}
    console.log(this.getDocument)
  
 }
  addresponse(addresponse: any) {
    throw new Error('Method not implemented.');
  }
  Documentpagination() {
    this.documentlist = this.jsonres.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
    this.collectionSize= this.jsonres.length;
    console.log(this.jsonres);
  }
  goToLink(url: string){
    window.open(url, "_blank");
}
rapidFilter(data:any){
  console.log(data.value);
  this.info.rapidFilter(data.value).subscribe((response)=>{

    console.log(" Doc_master response is...", response);
    this.jsonres = response;
    this.documentlist = this.jsonres.value;
    this.collectionSize = this.documentlist.length;
    console.log(this.jsonres.value);
 
  
},(error) => {
    console.log('error is ', error);
    this.error = error.error.statusvalue;
    this.errormes = error.error.StatusMessage
    console.log(this.error) 
    if (this.error === false ){
      this.title = "something went wrong";
      this.body = this.errormes;
      this.info.geterror(this.body,this.title)
    
      
    }

})
}
 
}
