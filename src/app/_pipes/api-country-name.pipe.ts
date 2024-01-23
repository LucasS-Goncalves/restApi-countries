import { Pipe, PipeTransform } from '@angular/core';
import { countries } from '../_helpers/countries';

@Pipe({
  name: 'apiCountryName'
})
export class ApiCountryNamePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const countryName = countries[value as keyof typeof countries];
    if(!countryName) return null;
    return countryName;
  }

}
