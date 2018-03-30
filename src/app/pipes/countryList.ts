import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name : 'liveCountry'
})
export class countryList implements PipeTransform{

  transform(countryList : any, searchText : any): any {

    if(searchText == null)
      return countryList;



  }

}
