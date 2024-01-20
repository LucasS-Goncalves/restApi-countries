import { Component, Input } from '@angular/core';
import { ICountry } from 'src/app/_interfaces/ICountry';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() country!: ICountry;
}
