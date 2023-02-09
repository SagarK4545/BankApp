import { Component,OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

import { cilTrash, cilPlus, cilPencil, cilFilter, brandSet, cilList } from '@coreui/icons';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Component({
  selector: 'app-documentmaster',
  templateUrl: './documentmaster.component.html',
  styleUrls: ['./documentmaster.component.css']
})
export class DocumentmasterComponent implements OnInit {
  jsonres: any = [];
  deletejson :any ={};
  filterjson:any = [];
  docum: any;
  Doc_id: any;
  editDoc: any;
  editresponse: any = false;
  doc_name: any;
  doc_desc: any;
  Doc_temp: any;
  EditData: any;
  doc_type: any;
  doc_date: any;
  doc_status: any;
  typecolor: boolean = false;
  viewresponse:any = false;
  viewDetails:any ;
  page = 1;
  collectionSize:any;
  pageSize = 4;
documentlist:any;
  error: any;
  errormes: any;
  title: any;
  body: any;
  statusvalue: any;
  statusmes: any;
  id: any;
  
  constructor(private info: InformationService, public IconSet: IconSetService, private form:FormBuilder) {

    IconSet.icons = { cilTrash, cilPlus, cilPencil, cilFilter, cilList, ...brandSet };

  }
  ngOnInit(){
    this.info.getDocumentsMaster().subscribe((response)=>{

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
  
  myFormGroup = this.form.group({
    doc_id: ['', Validators.required],
    doc_name: ['', Validators.required],
    Doc_Desc: ['', Validators.required],
    Doctype: ['', Validators.required],
    doc_template: ['', Validators.required],
    doc_statuscode: ['', Validators.required],
    doc_date: ['', Validators.required],
   

  })
  myAddGroup = this.form.group({
    doc_id: ['', Validators.required],
    doc_name: ['', Validators.required],
    Doc_Desc: ['', Validators.required],
    Doctype: ['', Validators.required],
    doc_template: ['', Validators.required],
    doc_statuscode: ['', Validators.required],
    doc_date: ['', Validators.required],
   

  })


    addresponse : any = false;
    response : any = false;
    reponse(){
      if (this.addresponse === false){
        this.addresponse = true
      }
      else{
        this.addresponse = false
      }
  
    }
    fltreponse(){
      if (this.response === false){
        this.response = true
      }
      else{
        this.response = false
      }
      
    }

    filterDocument(filter:any){
      console.log(890)
      console.log(filter.value)
      this.info.filterDocumentMaster(filter.value).subscribe((response)=>{
      console.log(" Doc_master filter response is...", response);
        this.jsonres = response;
        this.documentlist = this.jsonres.value;
      this.collectionSize = this.documentlist.length;
        console.log(this.filterjson);
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

    addDocument(data:any){
      this.docum = data.value;
      console.log(this.docum)
      this.info.addDocumentsMaster(this.docum).subscribe((response)=>{
      console.log(" Doc_master delete response is...", response);
      this.deletejson = response;
      console.log(this.deletejson);
        this.statusvalue = this.deletejson.statusvalue;
        this.statusmes = this.deletejson.statusmessage;
        this.id = this.deletejson.id
        if (this.statusvalue === true){
          this.body = this.statusmes;
          this.title = ""
          this.info.getsuccess(this.body,this.title)

          this.info.getDocumentsMaster().subscribe((response)=>{

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

    getMaster(){
      this.info.getDocumentsMaster().subscribe((response)=>{

        console.log(" Doc_master response is...", response);
        this.jsonres = response;
        console.log(this.jsonres);
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
    EditDocument(data:any){
      this.EditData = data.value;
      console.log(this.EditData)
      
      this.info.editDocumentMaster(this.EditData).subscribe((response)=>{

        console.log(" Doc_master update response is...", response);
        console.log(this.jsonres = response);
        
        this.statusvalue = this.jsonres.statusvalue;
        this.statusmes = this.jsonres.statusmessage;
        this.id = this.jsonres.value.doc_name
        if (this.statusvalue === true){
          this.body = "Document Name " + this.id + " is Updated "
          this.info.getsuccess(this.body,this.statusmes)
          
          this.info.getDocumentsMaster().subscribe((response)=>{

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
    
    getEditDocument(data:any){
     this.editDoc = data;
     if (this.editresponse === false){
      this.editresponse = true
    }
    else{
      this.editresponse = false
    }
    console.log(this.editresponse,data)
      this.myFormGroup.controls.doc_id.setValue(this.editDoc.doc_id);
  
      this.myFormGroup.controls.doc_name.setValue(this.editDoc.doc_name);
  
      this.myFormGroup.controls.Doc_Desc.setValue(this.editDoc.Doc_Desc);

      this.myFormGroup.controls.Doctype.setValue(this.editDoc.Doctype);

      this.myFormGroup.controls.doc_template.setValue(this.editDoc.doc_template);

      this.myFormGroup.controls.doc_statuscode.setValue(this.editDoc.doc_statuscode);
      
      this.myFormGroup.controls.doc_date.setValue(this.editDoc.doc_date);

     
  
    

     

     
    }
    deleteDocument(data:any){
     this.Doc_id = {"doc_id": data}
     console.log(this.Doc_id)
      this.info.deleteDocumentMaster(this.Doc_id).subscribe((response)=>{

        console.log(" Doc_master delete response is...", response);
        this.deletejson = response;
      //   this.documentlist = this.jsonres.value;
      // this.collectionSize = this.documentlist.length;
        console.log(this.deletejson);
        this.statusvalue = this.deletejson.statusvalue;
        this.statusmes = this.deletejson.statusmessage;
        this.id = this.deletejson.id
        if (this.statusvalue === true){
          this.body = "Document Id" + this.id + " is Deleted "
          this.info.getsuccess(this.body,this.statusmes)

          this.info.getDocumentsMaster().subscribe((response)=>{

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
    viewDocument(data:any){
      this.viewresponse = true;
      this.viewDetails = data;
      this.Doc_id = this.viewDetails.doc_id;
      this.doc_desc = this.viewDetails.doc_desc;
      this.doc_name = this.viewDetails.doc_name;
      this.doc_type = this.viewDetails.Doctype;
      this.Doc_temp = this.viewDetails.doc_template;
      this.doc_date = this.viewDetails.doc_date;
      this.doc_status = this.viewDetails.doc_statuscode;
      console.log ( this.viewDetails.Doctype ,"same", this.doc_name, "date",this.doc_date)
    }
    rapidFilter(data:any){
      
console.log(data.value);
      this.info.rapidFileterDocumentMaster(data.value).subscribe((response)=>{

        console.log(" Doc_master response is...", response);
        this.jsonres = response;
        this.documentlist = this.jsonres;
        this.collectionSize = this.documentlist.length;
        console.log(this.jsonres.value, "----", this.documentlist);
     
      
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
    Documentpagination() {
      this.documentlist = this.jsonres.value.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize,
      );
      this.collectionSize= this.jsonres.value.length;
      console.log(this.jsonres);
      console.log(this.page,"and",this.pageSize)
    }
}
