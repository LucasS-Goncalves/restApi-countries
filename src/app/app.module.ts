import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { SearchCountryComponent } from './_components/search-country/search-country.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './_components/card/card.component';
import { ApiCurrencyPipe } from './_pipes/api-currency.pipe';
import { ApiLanguagePipe } from './_pipes/api-language.pipe';
import { ApiCountryNamePipe } from './_pipes/api-country-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchCountryComponent,
    HomeComponent,
    CardComponent,
    ApiCurrencyPipe,
    ApiLanguagePipe,
    ApiCountryNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
