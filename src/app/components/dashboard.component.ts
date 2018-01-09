import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {PeopleService} from '../services/people.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {
  catsByGender = {};
  genders;
  constructor(private peopleService: PeopleService) {
    let self = this;
    self.peopleService
      .makeRequest()
      .subscribe(function(data) {
        self.catsByGender = self.peopleService.groupCatsByGender(data, 'gender');
        self.genders = Object.keys(self.catsByGender);
      });
  }

  trackGender(index, gender) {
    return gender;
  }
}
