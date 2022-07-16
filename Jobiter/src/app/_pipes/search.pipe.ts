import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../_models/job';

@Pipe({
  name: 'search',
  pure:false
})
export class SearchPipe implements PipeTransform {

  transform(value: Job[], char:string): Job[] {
    let list:Job[] = [];
    value.map(function(item){
      if(item.title.toLowerCase().includes(char)){
        list.push(item)
      }
    })
    return list;
  }

}
