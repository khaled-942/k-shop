import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egycurrency'
})
export class EgycurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} ج.م`;;
  }

}
