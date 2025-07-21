import {Component, input} from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-people-details',
  imports: [],
  templateUrl: './people-details.component.html',
  styleUrl: './people-details.component.css'
})
export class PeopleDetailsComponent {
  person = input.required<Person|undefined>();
}
