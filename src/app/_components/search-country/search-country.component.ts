import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent {

  searchContryValue = new EventEmitter<string>();

  searchCountry(search: string){
    this.searchContryValue.emit(search);
  }
}
