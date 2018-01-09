import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
@Injectable()
export class PeopleService {
  constructor(
    private httpClient: Http
  ) {}

  makeRequest() {
    let url = `https://agl-developer-test.azurewebsites.net/people.json`;
    return this.httpClient
      .get(url)
      .map(data => data.json());

  }

  groupCatsByGender(items, prop= 'gender') {
    return items.reduce(function(groups, item) {
      let val = item[prop];
      groups[val] = groups[val] || [];
      if (item.pets) {
        let cats = item.pets.filter(pet => pet.type === 'Cat').map(pets => pets.name);
        groups[val] = groups[val].concat(cats);
      }
      return groups;
      }, {});
  }

  /*
  getCatsSortedByName(data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        data[key].sort();
      }
    }

  }
  */


}
