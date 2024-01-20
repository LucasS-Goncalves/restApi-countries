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
    this.countriesApiService.getCountries().subscribe({
      next: res => console.log(Object.values(res[54].languages))
    })
  }

  searchContry(search: any){
    console.log(search);
  }

  getContriesInfo(){

  }

  dropdownToggle(){
    this.dropdownOpened = !this.dropdownOpened;
  }
}
