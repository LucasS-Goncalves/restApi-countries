import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CountriesApiService } from 'src/app/_services/countries-api.service';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent {

  @Input() inputString = '';

  constructor(private countriesApiService: CountriesApiService){}

  searchCountry(){
    this.countriesApiService.seachCountryEvent.emit(this.inputString);
  }
}
