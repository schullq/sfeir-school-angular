import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {
  transform(value: string): any {
    if (value === null || value === '') {
      return 'N/A';
    }
    return value;
  }
}
