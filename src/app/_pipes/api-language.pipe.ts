import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apiLanguage'
})
export class ApiLanguagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // const valueToTransform = Object.values();
    return null;
  }

}
