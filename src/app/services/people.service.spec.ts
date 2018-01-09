import {TestBed, fakeAsync, tick, flushMicrotasks} from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let service: PeopleService;
  let backend: MockBackend;
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
    },
    {
      name: 'Mary',
      gender: 'Female',
      age: 25,
      pets:
        [
          {name: 'Don', type: 'Cat'},
          {name: 'John', type: 'Cat'},
          {name: 'Tom', type: 'Dog'}
        ]
    }
  ];
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        PeopleService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
    // Get the MockBackend
    backend = TestBed.get(XHRBackend);

    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(PeopleService);
  });

  describe('MakeRequest()', () => {

    it('should return data as Observable',
      fakeAsync(() => {

        const mockResponse = {
          data: [
            { id: 0, name: 'Video 0' },
            { id: 1, name: 'Video 1' },
            { id: 2, name: 'Video 2' },
            { id: 3, name: 'Video 3' },
          ]
        };

        backend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
        let result;
        service.makeRequest().subscribe((response) => {
         result = response.data;
        });
        tick();
        expect(result.length).toBe(4);

      }));
  });
  describe('groupCatsByGender()', () => {

    it('should group cats by property gender',
      fakeAsync(() => {
        const catsByGender = service.groupCatsByGender(mockData, 'gender');
        expect(catsByGender['Male'].length).toBe(1);
        expect(catsByGender['Female'].length).toBe(2);
        expect(catsByGender['Male']).toEqual(['Garfield']);
        expect(catsByGender['Female']).toEqual(['Don', 'John']);
      }));
  });
});
