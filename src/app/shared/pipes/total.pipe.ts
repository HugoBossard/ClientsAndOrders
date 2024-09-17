import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(val: any, withTva?: boolean): number {
    if (withTva) {
      return val.totalTTC();
    }

    return val.totalHT();
  }
}