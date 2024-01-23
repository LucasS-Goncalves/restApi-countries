import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apiLanguage'
})
export class ApiLanguagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value == undefined) return;
    const valueToTransform = Object.values(value);
    if(valueToTransform) return valueToTransform;
    return null;
  }

}

// <p *ngFor="let languages of (country.languages | apiLanguage)">
//       {{languages }}
//     </p>
