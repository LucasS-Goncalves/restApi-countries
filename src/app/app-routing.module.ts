import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';

const routes: Routes = [
  {
    path: 'countries', component: HomeComponent
  },
  {
    path: 'countries/:country', component: CountryDetailsComponent
  },
  {
    path: '', redirectTo: 'countries', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'countries'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
