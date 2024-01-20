import { Pipe, PipeTransform } from '@angular/core';
import { ICountry } from '../_interfaces/ICountry';

@Pipe({
  name: 'apiCurrency'
})
export class ApiCurrencyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const valueToTransform = (Object.values(value)[0] as ICountry)['name'];
    return valueToTransform;
  }

}


// <p *ngIf="country.currencies">
//       {{country.currencies | apiCurrency}}
//     </p>
