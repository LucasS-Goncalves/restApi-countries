import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ICountry } from 'src/app/_interfaces/ICountry';
import { CountriesApiService } from 'src/app/_services/countries-api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit, OnDestroy{

  country$!: Observable<ICountry[]>;
  countryName!: string;
  paramsSubscription!: Subscription;

  loadingSpinner = true;
  displayCountries = false;

  constructor(private route: ActivatedRoute, private countriesApiService: CountriesApiService){}

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params: Params) => {
        const countryName = params['params']['country'];
        this.country$ = this.countriesApiService.loadCountries(countryName);
        this.loadingSpinner = false;
        this.displayCountries = true;
      }
    })
  }

  back(){
    window.history.back();
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
