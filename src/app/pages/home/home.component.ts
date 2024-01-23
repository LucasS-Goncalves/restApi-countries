import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from 'src/app/_interfaces/ICountry';
import { CountriesApiService } from 'src/app/_services/countries-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  dropdownOpened = false;
  countries!: Observable<ICountry[]>;

  constructor(private countriesApiService: CountriesApiService){}

  ngOnInit(): void {
    this.countries = this.countriesApiService.getCountries();
  }

  searchContry(search: any){

  }

  dropdownToggle(){
    this.dropdownOpened = !this.dropdownOpened;
  }
}
