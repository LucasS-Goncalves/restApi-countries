import { SearchCountryComponent } from './../../_components/search-country/search-country.component';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, debounceTime, distinctUntilChanged, take } from 'rxjs';
import { ICountry } from 'src/app/_interfaces/ICountry';
import { CountriesApiService } from 'src/app/_services/countries-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  dropdownOpened = false;
  countries$!: Observable<ICountry[]>;

  regionDefaultText = 'Filter by Region';
  region = this.regionDefaultText;

  typeheadSubscription!: Subscription;

  @ViewChild('appSearch') appSearch!: SearchCountryComponent;

  constructor(private countriesApiService: CountriesApiService){}

  ngOnInit(): void {
    this.countries$ = this.countriesApiService.getCountries();
    this.searchContry();
  }

  searchContry(){
    this.typeheadSubscription = this.countriesApiService.seachCountryEvent.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe({
      next: (res: string) => {
        if(res.length === 0) return;
        this.countries$ = this.countriesApiService.searchByCountryName(res);
      }
    });
  }

  filterByRegion(region: string){
    if(this.region === region) return;
    this.region = region;
    this.appSearch.inputString = '';
    this.countries$ = this.countriesApiService.filterByRegion(region);
  }

  reset(){
    if(this.appSearch.inputString === '' && this.region === this.regionDefaultText) return;
    this.appSearch.inputString = '';
    this.region = this.regionDefaultText;
    this.countries$ = this.countriesApiService.resetFilters();
  }

  dropdownToggle(){
    this.dropdownOpened = !this.dropdownOpened;
  }

  ngOnDestroy(): void {
    this.typeheadSubscription.unsubscribe();
  }
}
