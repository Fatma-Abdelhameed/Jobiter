import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../_models/job';

@Pipe({
  name: 'dateFilter',
  pure:false
})
export class DateFilterPipe implements PipeTransform {

  transform(value: Job[], date:Date): Job[] {
    let list:Job[] = [];
    if(date != undefined){
      let dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
      value.map(function(item){
        if(item.postedDate == dateString){
          list.push(item)
        }
      })
      return list;
    }
    else{
      return value
    }
  }

}
