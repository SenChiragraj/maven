import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform{
  transform(value: any, symbol: string ='$'):any{
    if(isNaN(value) || value === null || value===undefined){
      return "Invalid amount";
    }
    let numberValue=Number(value);
    let fm=numberValue.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits:2
    })
    return `${symbol}${fm}`;
  }
}