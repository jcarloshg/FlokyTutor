import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountShortID'
})
export class AccountShortIDPipe implements PipeTransform {

  transform(ID: string, ...args: unknown[]): string {
    const shortID = ID.slice(0, 12);
    return shortID;
  }

}
