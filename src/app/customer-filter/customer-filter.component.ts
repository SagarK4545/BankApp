import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from './country';
import { CountryService } from './country.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-customer-filter',
	standalone: true,
	imports: [
		NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbdSortableHeader,
		NgbPaginationModule,
		NgIf,
	],
	templateUrl: './customer-filter.component.html',
	providers: [CountryService, DecimalPipe],
})
export class CustomerFilterComponent {
	countries$: Observable<Country[]>;
	total$: Observable<number>;
 
		constructor(public service: CountryService) {
		this.countries$ = service.countries$;
		this.total$ = service.total$;
    
	}

	
}
