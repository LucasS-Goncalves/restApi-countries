import { SearchCountryComponent } from './../../_components/search-country/search-country.component';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, debounceTime, distinctUntilChanged, filter, map, switchMap, take } from 'rxjs';
import { ICountry } from 'src/app/_interfaces/ICountry';
import { CountriesApiService } from 'src/app/_services/countries-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  dropdownOpened = false;
  errorMessage = false;
  loadingSpinner = true;
  displayCountries = false;

  countries!: ICountry[];
  private readonly regionDefaultText = 'Filter by Region';
  region = this.regionDefaultText;
  typeheadSubscription!: Subscription;

  @ViewChild('appSearch') appSearch!: SearchCountryComponent;

  constructor(private countriesApiService: CountriesApiService){}

  ngOnInit(): void {
    this.countriesApiService.loadCountries().pipe(take(1)).subscribe({
      next: res => {
        this.countries = res;
        this.displayCountries = true;
        this.loadingSpinner = false;
      }
    });

    this.typeheadSubscription = this.searchContry().subscribe({
      next: res => {
        this.loadCountryByName(res);
      }
    });
  }

  searchContry(){
    return this.countriesApiService.seachCountryEvent.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    );
  }

  loadCountryByName(country: string){
    this.displayCountries = false
    this.loadingSpinner = true;
    this.countriesApiService.loadCountries(country).pipe(take(1)).subscribe({
      next: res => {
        this.countries = res;
        this.loadingSpinner = false;
        this.errorMessage = false;
        this.displayCountries = true;
      },
      error: () => {
        this.loadingSpinner = false;
        this.errorMessage = true;
      }
    })
  }

  filterByRegion(region: string){
    if(this.region === region) return;
    this.loadingSpinner = true;
    this.displayCountries = false;
    this.region = region;
    this.appSearch.inputString = '';
    this.countriesApiService.filterByRegion(region).pipe(take(1)).subscribe({
      next: res => {
        this.countries = res;
        this.loadingSpinner = false;
        this.displayCountries = true;
      }
    });
  }

  reset(){
    if(this.appSearch.inputString === '' && this.region === this.regionDefaultText) return;

    if(this.appSearch.inputString === '' && this.region !== this.regionDefaultText) {
      this.countriesApiService.loadCountries().pipe(take(1)).subscribe({
        next: res => {
          this.countries = res;
          this.displayCountries = true;
          this.loadingSpinner = false;
        }
      });
    }
    this.loadingSpinner = true;
    this.displayCountries = false;
    this.appSearch.inputString = '';
    this.region = this.regionDefaultText;
    this.countriesApiService.resetFilters();
  }

  dropdownToggle(){
    this.dropdownOpened = !this.dropdownOpened;
  }

  ngOnDestroy(): void {
    this.typeheadSubscription.unsubscribe();
  }
}
