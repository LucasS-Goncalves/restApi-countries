import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ICountry } from '../_interfaces/ICountry';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  baseUrl = 'https://restcountries.com/v3.1/';
  seachCountryEvent = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  loadCountries(country = ''){
    if(country.length === 0) return this.http.get<ICountry[]>(this.baseUrl + 'all');
    return this.http.get<ICountry[]>(this.baseUrl + 'name/' + country);
  }

  filterByRegion(region: string){
    return this.http.get<ICountry[]>(this.baseUrl + 'region/' + region);
  }

  resetFilters(){
    this.seachCountryEvent.emit("");
  }
}
