import { Component, Input } from '@angular/core';
@Component({
  selector: 'pet-list',
  templateUrl: './pet.list.component.html'
})

export class PetListComponent {
  @Input() pets: any[];
  constructor() {
  }
}
