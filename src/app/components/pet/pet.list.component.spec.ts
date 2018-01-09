/* tslint:disable: max-line-length */
import { TestBed, async } from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import { By } from '@angular/platform-browser';
import {PetListComponent} from './pet.list.component';
describe('PetList Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
      declarations: [PetListComponent],
      schemas:      []
    });
  });

  it('should display pets as provided to the component', async(() => {
    const fixture = TestBed.createComponent(PetListComponent);
    const comp    = fixture.componentInstance;
    comp.pets = ['Garfield', 'Tom'];
    fixture.detectChanges();
    let pets: DebugElement[]  = fixture.debugElement.queryAll(By.css('.pet-name'));
    expect(pets.length).toBe(2);
    expect(pets[0].nativeElement).toContainText('Garfield');
  }));
});
