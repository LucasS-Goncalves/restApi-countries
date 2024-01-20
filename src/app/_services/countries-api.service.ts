import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICountry } from '../_interfaces/ICountry';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get<any>('https://restcountries.com/v3.1/all');
  }
}
