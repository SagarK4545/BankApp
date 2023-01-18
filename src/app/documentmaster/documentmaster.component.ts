import { Component,OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

import { cilTrash, cilPlus, cilPencil, cilFilter, brandSet, cilList } from '@coreui/icons';

@Component({
  selector: 'app-documentmaster',
  templateUrl: './documentmaster.component.html',
  styleUrls: ['./documentmaster.component.css']
})
export class DocumentmasterComponent implements OnInit {
  jsonres: any = [];
  filterjson:any = [];
  docum: any;
  Doc_id: any;
  editDoc: any;
  editresponse: any;
  doc_name: any;
  doc_desc: any;
  Doc_temp: any;
  EditData: any;
  doc_id: any;
  
  constructor(private info: InformationService, public IconSet: IconSetService, private form:FormBuilder) {

    IconSet.icons = { cilTrash, cilPlus, cilPencil, cilFilter, cilList, ...brandSet };

  }
  ngOnInit(){
    this.info.getDocumentsMaster().subscribe((response)=>{

      console.log(" Doc_master response is...", response);
      this.jsonres = response;
      console.log(this.jsonres);
  },(error) => {
      console.log('error is ', error)

  })
  }
  
  myFormGroup = this.form.group({
    doc_id: ['', Validators.required],
    doc_name: ['', Validators.required],
    doc_desc: ['', Validators.required],
    doc_type: ['', Validators.required],
    doc_template: ['', Validators.required],
    doc_statuscode: ['', Validators.required],
    doc_date: ['', Validators.required],
   

  })
  myAddGroup = this.form.group({
    doc_id: ['', Validators.required],
    doc_name: ['', Validators.required],
    doc_desc: ['', Validators.required],
    doc_type: ['', Validators.required],
    doc_template: ['', Validators.required],
    doc_statuscode: ['', Validators.required],
    doc_date: ['', Validators.required],
   

  })

doc_data = [
  {custid: 1,
    doc_id: 101,
    DocDate: "1/1/2023",
    doc_name: "Welcome letter",
    Doc_Desc : "Welcome letter",
    Doctype : "pdf",
    doc_template: "UIE2001",
    doc_statuscode:"active"
  },
  {custid: 1,
    doc_id: 102,
    DocDate: "1/1/2023",
    doc_name: "Welcome letter",
    Doc_Desc : "Welcome letter",
    Doctype : "pdf",
    doc_template: "UIE2001",
    doc_statuscode:"active"
  },
  {custid: 1,
    doc_id: 103,
    DocDate: "1/1/2023",
    doc_name: "Welcome letter",
    Doc_Desc : "Welcome letter",
    Doctype : "pdf",
    doc_template: "UIE2001",
    doc_statuscode:"active"
  },
]

  documents = [
    {custid: 1,
      doc_id: 101,
      DocDate: "1/1/2023",
      doc_name: "Welcome letter",
      Doc_Desc : "Welcome letter",
      Doctype : "pdf",
      doc_template: "UIE2001",
      doc_statuscode:"active"
    },
    {custid: 1,
      doc_id: 103,
      DocDate: "1/1/2023",
      doc_name: "Welcome letter",
      Doc_Desc : "Welcome letter",
      Doctype : "pdf",
      doc_template: "UIE2001",
      doc_statuscode:"active"
    },
    {custid: 1,
      doc_id: 102,
      DocDate: "1/1/2023",
      doc_name: "Welcome letter",
      Doc_Desc : "Welcome letter",
      Doctype : "pdf",
      doc_template: "UIE2001",
      doc_statuscode:"active"
    },
    
    ]
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
        console.log(this.filterjson);
    },(error) => {
        console.log('error is ', error)
  
    })
    }

    addDocument(data:any){
      this.docum = data.value;
      console.log(this.docum)
      this.info.addDocumentsMaster(this.docum).subscribe((response)=>{
      console.log(" Doc_master delete response is...", response);
      this.jsonres = response;
      console.log(this.jsonres);
  },(error) => {
      console.log('error is ', error)

  })
    }

    getMaster(){
      this.info.getDocumentsMaster().subscribe((response)=>{

        console.log(" Doc_master response is...", response);
        this.jsonres = response;
        console.log(this.jsonres);
    },(error) => {
        console.log('error is ', error)
  
    })
    }
    EditDocument(data:any){
      this.EditData = data.value;
      console.log(this.EditData)
      
      this.info.editDocumentMaster(this.EditData).subscribe((response)=>{

        console.log(" Doc_master update response is...", response);
        this.jsonres = response;
        console.log(this.jsonres);
    },(error) => {
        console.log('error is ', error)
  
    })
    }
    
    getEditDocument(data:any){
     this.editDoc = data;
      this.myFormGroup.controls.doc_id.setValue(this.editDoc.doc_id);
  
      this.myFormGroup.controls.doc_name.setValue(this.editDoc.doc_name);
  
      this.myFormGroup.controls.doc_desc.setValue(this.editDoc.Doc_Desc);

      this.myFormGroup.controls.doc_type.setValue(this.editDoc.doc_type);

      this.myFormGroup.controls.doc_template.setValue(this.editDoc.doc_template);

      this.myFormGroup.controls.doc_statuscode.setValue(this.editDoc.doc_statuscode);
      
      this.myFormGroup.controls.doc_date.setValue(this.editDoc.doc_date);
    
  
    

     

     if (this.editresponse === false){
      this.editresponse = true
    }
    else{
      this.editresponse = false
    }
    }
    deleteDocument(data:any){
     this.Doc_id = {"doc_id": data}
     console.log(this.Doc_id)
      this.info.deleteDocumentMaster(this.Doc_id).subscribe((response)=>{

        console.log(" Doc_master delete response is...", response);
        this.jsonres = response;
        console.log(this.jsonres);
    },(error) => {
        console.log('error is ', error)
  
    })
    }
}
