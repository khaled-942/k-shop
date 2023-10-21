import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egy'
})
export class EgyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} ج.م`;
  }

}
