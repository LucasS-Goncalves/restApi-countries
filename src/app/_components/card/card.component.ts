import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from 'src/app/_interfaces/ICountry';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() country!: ICountry;

  constructor(private router: Router){}

  loadCountry(){
    this.router.navigate([this.country.name.common]);
  }
}
