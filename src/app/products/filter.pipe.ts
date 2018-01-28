import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(items: any[], criteria: string): any {
    if(criteria === 'wszystkie produkty') {
      return items;
    } else {
      return items.filter(item => {
        return item.category === criteria;
      })
    }
  }

}
