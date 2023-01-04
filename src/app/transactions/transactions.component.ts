import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridAngular } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms'; 

import { AgGridModule } from 'ag-grid-angular';

import { DecimalPipe, NgFor } from '@angular/common';

interface Country {
	name: string;
	flag: string;
	amount: number;
	accountnumber: number;
}

const COUNTRIES: Country[] = [
	{
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		amount: 17075200,
		accountnumber: 146989754,
	},
	{
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		amount: 9976140,
		accountnumber: 36624199,
	},
	{
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		amount: 9629091,
		accountnumber: 324459463,
	},
	{
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		amount: 9596960,
		accountnumber: 1409517397,
	},
];


@Component({
  selector: 'app-transactions',
  standalone: true,
	imports: [NgFor, DecimalPipe],

  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  countries = COUNTRIES;
  
}
