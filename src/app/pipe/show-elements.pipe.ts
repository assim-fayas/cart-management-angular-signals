import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showElements'
})
export class ShowElementsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): boolean {
    const parsedValue=parseInt(value)   
 
    if(parsedValue>0){
return false
    }
    return true;
  }
  

}
