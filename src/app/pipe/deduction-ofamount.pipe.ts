import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deductionOfamount'
})
export class DeductionOfamountPipe implements PipeTransform {

  transform(value:string, ...args: unknown[]): number {
    return Number(value)-25;
  }

}
