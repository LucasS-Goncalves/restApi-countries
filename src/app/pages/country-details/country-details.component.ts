import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICountry } from 'src/app/_interfaces/ICountry';
import { CountriesApiService } from 'src/app/_services/countries-api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit{

  country$!: Observable<ICountry[]>;
  countryName!: string;

  constructor(private route: ActivatedRoute, private countriesApiService: CountriesApiService, private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params: Params) => {
        this.countryName = params['params']['country'];
      }
    })
    this.country$ = this.countriesApiService.searchByCountryName(this.countryName);
  }

}
