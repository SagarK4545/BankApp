import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InformationService } from '../information.service';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilTrash, cilPlus, cilPencil, cilFilter, brandSet, cilList } from '@coreui/icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
	selector: 'app-transactions',

	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
	users: any;
	trans: any = {};
	CustData: any;
	CustId: any = this.info.CustomerWithAccount.cust_id;
	transactions: any;
	addresponse: any = false;
	savingtype: any = false;
	loantype: boolean = false;
	page = 1;
    pageSize = 10;
    collectionSize:any;
	txnid: any;
    acctnum: any;
    acctype: any;
    accsubtype: any;
    txndetail: any;
    txndate: any;
    withdrawamount: any;
    balance: any;
    typecolor: boolean = false;
    viewresponse:any = false;
    viewDetails:any ;
    saving:any = false;
    loan:any=false;
    viewresponseloan:any=false;
    viewDetailsloan:any=false;
    emiamount:any;
    eminum:any;
    accounttype:any;
    accountsubtype:any;
    emiid:any;
    emidate:any;
    emistatus:any;
    emireminder:any;
    remainingbalance:any;

	myFilterCust = this.form.group({
		acctnum: ['', Validators.required],
		accounttype: ['', Validators.required],
		accountsubtype: ['', Validators.required]
	});
	errormes: any;
	error: any;
	title: any;
	body: any;


	ngOnInit() {
		this.CustData = this.info.CustomerWithAccount;
		console.log("inside", this.CustData);
		// this.trans["acctnum"] = this.info.CustomerWithAccount.acctnum;
		this.trans["accountType"] = this.info.CustomerWithAccount.accounttype;
		this.trans["custId"] = this.info.CustomerWithAccount.cust_id;
		console.log("in trans", this.trans);
		if (this.trans.accountType === "saving") {
			this.savingtype = true;
			// this.trans["accountType"] = "Saving";
		}
		else {
			this.savingtype = false
		}

		if (this.trans.accountType === "loan") {
			this.loantype = true;
		}
		else {
			this.loantype = false;
		}


		this.info.getAllTransactions(this.trans).subscribe((response: any = []) => {

			console.log("All Customers  response is...", response);
			this.transactions = response;
			this.users=this.transactions.value;
            this.collectionSize = this.users.length;
            console.log("users ", this.users);
            console.log("size", this.users.length);
			console.log("users", this.users);
		}, (error) => {
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


	reponse() {

		if (this.addresponse === false) {
			this.addresponse = true
		}
		else {
			this.addresponse = false
		}

	}


	constructor(private info: InformationService, public IconSet: IconSetService, private form: FormBuilder) {
		IconSet.icons = { cilTrash, cilPlus, cilPencil, cilFilter, cilList, ...brandSet };
	}

	SearchTransaction(filter: any) {
        console.log(890)
        this.trans = filter.value
        if (this.trans.accountType === "saving") {
            this.loantype = false;
            this.savingtype = true;
        }
        if (this.trans.accountType === "loan") {
            this.loantype = true;
            this.savingtype = false;
        }
        this.trans["custId"] = this.CustId;
        console.log("in search trans", this.trans);
        console.log("saving", this.saving, "loan", this.loan)
        this.info.getAllTransactions(filter.value).subscribe((response) => {
            console.log(" Customer filter response is...", response);
            this.transactions = response;
            this.users = this.transactions.value
            this.collectionSize = this.users.length;
            console.log("Loanfilter ", this.users);
        }, (error) => {
            console.log('error is ', error);
            this.error = error.error.statusvalue;
            this.errormes = error.error.StatusMessage
            if (this.error === false) {
                this.title = "something went wrong";
                this.body = this.errormes;
                this.info.geterror(this.body, this.title)
            }
        })
    }
    filterTransaction(filter: any) {
        console.log(890)
        this.trans = filter.value
        this.trans["cust_id"] = this.CustId;
        console.log(this.trans)
        if (this.trans["accounttype"] === "loan") {
            this.loantype = true;
            this.savingtype = false;
            this.info.getLoanFilterTransactions(this.trans).subscribe((response) => {
                console.log(" Customer filter response is...", response);
                this.transactions = response;
                this.users = this.transactions.value;
                this.collectionSize = this.users.length;
                console.log("Loanfilter ", this.users);
            }, (error) => {
                console.log('error is ', error);
                this.error = error.error.statusvalue;
                this.errormes = error.error.StatusMessage
                if (this.error === false) {
                    this.title = "something went wrong";
                    this.body = this.errormes;
                    this.info.geterror(this.body, this.title)
                }
            })
        }
        if (this.trans["accounttype"] === "saving") {
            this.loantype = false;
            this.savingtype = true;
            this.info.getSavingFilterTransactions(this.trans).subscribe((response) => {
                console.log(" Customer filter response is...", response);
                this.transactions = response;
                this.users = this.transactions.value;
                this.collectionSize = this.users.length;
                console.log("Loanfilter ", this.users);
                console.log("Loansize", this.users.length);
            }, (error) => {
                console.log('error is ', error);
                this.error = error.error.statusvalue;
                this.errormes = error.error.StatusMessage
                if (this.error === false) {
                    this.title = "something went wrong";
                    this.body = this.errormes;
                    this.info.geterror(this.body, this.title)
                }
            })
        }
    }
	refreshCountries() {
        this.users = this.transactions.value.slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize,
        );
        this.collectionSize= this.transactions.value.length;
        console.log(this.users);
    }
	DeleteTransaction(data:any){
	// 	this.custId = {"cust_id": data}
	// 	console.log(this.custId)
	// 	 this.info.deleteCustomer(this.custId).subscribe((response)=>{
	// 	   console.log(" Customer delete response is...", response);
	// 	   this.jsonres = response;
	// 	   console.log(this.jsonres);
	//    },(error) => {
	// 	   console.log('error is ', error)
	//    })
	   }
	   viewTransaction(x:any){
        this.viewresponse = true;
        this.viewDetails = x;
        this.saving=true;
        console.log(this.viewDetailsloan)
        console.log(this.saving, this.loan, this.viewresponse)
        this.txnid = this.viewDetails.txnid;
        this.acctnum = this.viewDetails.acctnum;
        this.acctype = this.viewDetails.accounttype;
        this.accsubtype = this.viewDetails.accsubtype;
        this.txndetail = this.viewDetails.txndetail;
        this.txndate = this.viewDetails.txndate;
        this.withdrawamount = this.viewDetails.withdrawamount;
        this.balance = this.viewDetails.balance;
      }
      viewTransactionLoan(x:any){
        this.viewresponseloan = true;
        this.viewDetailsloan = x;
        this.loan=true;
        console.log(this.viewDetailsloan)
        this.emiamount = this.viewDetailsloan.emiamount;
        this.eminum = this.viewDetailsloan.eminum;
        this.accounttype = this.viewDetailsloan.accounttype;
        this.accountsubtype = this.viewDetailsloan.accsubtype;
        this.emiid = this.viewDetailsloan.emiid;
        this.emidate = this.viewDetailsloan.emidate;
        this.emistatus = this.viewDetailsloan.emistatus;
        this.emireminder = this.viewDetailsloan.emireminder;
        this.remainingbalance = this.viewDetailsloan.remainingbalance;
      }

}
