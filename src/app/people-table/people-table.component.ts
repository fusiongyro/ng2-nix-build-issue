import {Component, input, output} from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-people-table',
  imports: [],
  templateUrl: './people-table.component.html',
  styleUrl: './people-table.component.css'
})
export class PeopleTableComponent {
  data = input.required<Person[]>();
  selectionChanged = output<Person>();

  protected selected: any = undefined;

  select(row: any) {
    this.selected = row;
    this.selectionChanged.emit(row);
  }
}
