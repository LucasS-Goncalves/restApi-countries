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

  getCountries(){
    return this.http.get<any>(this.baseUrl + 'all');
  }

  filterByRegion(region: string){
    return this.http.get<any>(this.baseUrl + 'region/' + region);
  }

  searchByCountryName(country: string){
    if(country === '') return this.getCountries();
    return this.http.get<ICountry[]>(this.baseUrl + 'name/' + country);
  }

  resetFilters(){
    this.seachCountryEvent.emit("");
    return this.getCountries();
  }
}
