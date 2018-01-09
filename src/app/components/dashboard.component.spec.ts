/* tslint:disable: max-line-length */
import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import {PeopleService} from '../services/people.service';
import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import  'rxjs/add/Observable/of';
describe('Dashboard Component', () => {
  let mockData = [
    {
      name: 'Bob',
      gender: 'Male',
      age: 23,
      pets:
        [
          {name: 'Garfield', type: 'Cat'},
          {name: 'Tom', type: 'Dog'}
        ]
    }
  ];
  let peopleServiceStub = {
      makeRequest: () => {
        return Observable.of(mockData);
      },
      groupCatsByGender: () => {
        return {
          'Male': ['Tom', 'Garfield'],
          'Female': ['Sam', 'Max']
        };
      }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ {provide: PeopleService, useValue: peopleServiceStub } ],
      declarations: [DashboardComponent],
      schemas:      [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should contain dashboard text', async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const comp    = fixture.componentInstance;
    const peopleService = fixture.debugElement.injector.get(PeopleService);
    fixture.detectChanges();
    expect(fixture.nativeElement).toContainText('Welcome to the Pet Dashboard!!');
  }));

  it('should have CatsByGender and Genders defined', async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const comp    = fixture.componentInstance;
    const peopleService = fixture.debugElement.injector.get(PeopleService);
    fixture.detectChanges();
    expect(comp.catsByGender['Male'].length).toBe(2);
    expect(comp.genders.length).toBe(2);
  }));

  it('should have display cats sorted by name', async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const comp    = fixture.componentInstance;
    const peopleService = fixture.debugElement.injector.get(PeopleService);
    fixture.detectChanges();
    expect(comp.catsByGender['Male']).toEqual(['Garfield', 'Tom']);
    expect(comp.catsByGender['Female']).toEqual(['Max', 'Sam']);
    expect(fixture.nativeElement).toContainText('Male');
    expect(fixture.nativeElement).toContainText('Female');
  }));
});
