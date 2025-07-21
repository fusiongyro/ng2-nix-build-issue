import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PeopleTableComponent} from './people-table/people-table.component';
import {Person} from "./person";
import {PeopleDetailsComponent} from './people-details/people-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PeopleTableComponent, PeopleDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nglearn';

  protected readonly parent = parent;
  protected selectedPerson: Person | undefined;

  onSelectionChange($event: Person) {
    this.selectedPerson = $event;
  }

  data : Person[] = [
    {
      "name": "Quail Davis",
      "phone": "(180) 124-6054",
      "email": "dapibus.quam@yahoo.com",
      "postalZip": "31610",
      "country": "Austria"
    },
    {
      "name": "Allegra Peck",
      "phone": "1-355-851-3183",
      "email": "vestibulum.mauris@outlook.net",
      "postalZip": "783383",
      "country": "Italy"
    },
    {
      "name": "Kasper Houston",
      "phone": "1-442-534-7458",
      "email": "libero.nec.ligula@aol.couk",
      "postalZip": "9844",
      "country": "China"
    },
    {
      "name": "Kyle Park",
      "phone": "(104) 714-2153",
      "email": "sem@icloud.org",
      "postalZip": "3472",
      "country": "Germany"
    },
    {
      "name": "Neve Higgins",
      "phone": "(762) 474-4168",
      "email": "cras@google.net",
      "postalZip": "662242",
      "country": "Mexico"
    },
    {
      "name": "Caldwell Blackwell",
      "phone": "(541) 502-8638",
      "email": "nunc.quisque@yahoo.net",
      "postalZip": "547379",
      "country": "South Korea"
    },
    {
      "name": "Margaret Marshall",
      "phone": "1-654-841-3275",
      "email": "nunc@google.org",
      "postalZip": "6448",
      "country": "France"
    },
    {
      "name": "Odessa Randolph",
      "phone": "1-888-382-4521",
      "email": "quis.arcu.vel@hotmail.ca",
      "postalZip": "00626",
      "country": "Germany"
    },
    {
      "name": "Caesar Davenport",
      "phone": "1-676-877-8312",
      "email": "mi.tempor@icloud.ca",
      "postalZip": "8199",
      "country": "Ukraine"
    },
    {
      "name": "Rahim Sears",
      "phone": "1-207-552-0896",
      "email": "a.nunc.in@google.couk",
      "postalZip": "06779",
      "country": "Belgium"
    },
    {
      "name": "Hilel Cross",
      "phone": "1-851-648-3725",
      "email": "etiam.vestibulum.massa@aol.edu",
      "postalZip": "64-54",
      "country": "Colombia"
    },
    {
      "name": "Ayanna Duffy",
      "phone": "(972) 841-6211",
      "email": "ac.tellus@hotmail.net",
      "postalZip": "17161",
      "country": "New Zealand"
    },
    {
      "name": "Chava Mcclure",
      "phone": "1-833-881-0121",
      "email": "turpis.vitae.purus@outlook.ca",
      "postalZip": "93349",
      "country": "Singapore"
    },
    {
      "name": "Olivia Kennedy",
      "phone": "(586) 856-5014",
      "email": "id.enim@google.edu",
      "postalZip": "72879",
      "country": "Austria"
    },
    {
      "name": "Kirby Ellison",
      "phone": "1-784-178-3144",
      "email": "pede.sagittis@aol.edu",
      "postalZip": "3667",
      "country": "Canada"
    },
    {
      "name": "Savannah Moss",
      "phone": "(847) 879-6588",
      "email": "mollis@protonmail.couk",
      "postalZip": "26054-48426",
      "country": "Singapore"
    },
    {
      "name": "Bell Becker",
      "phone": "(984) 878-2156",
      "email": "rutrum.fusce@icloud.org",
      "postalZip": "6932",
      "country": "Costa Rica"
    },
    {
      "name": "Ashton Flowers",
      "phone": "(454) 558-1358",
      "email": "in.faucibus@icloud.couk",
      "postalZip": "R6S 2H5",
      "country": "Germany"
    },
    {
      "name": "Walker Nixon",
      "phone": "(916) 743-8282",
      "email": "vestibulum.lorem@google.net",
      "postalZip": "B8A 5B7",
      "country": "New Zealand"
    },
    {
      "name": "Reed Maxwell",
      "phone": "(247) 707-1084",
      "email": "ultrices@outlook.com",
      "postalZip": "82-48",
      "country": "United States"
    },
    {
      "name": "Drake Eaton",
      "phone": "(760) 503-5613",
      "email": "egestas@icloud.com",
      "postalZip": "76-27",
      "country": "Colombia"
    },
    {
      "name": "Steel Ramirez",
      "phone": "1-524-268-3897",
      "email": "amet@yahoo.com",
      "postalZip": "51946",
      "country": "Canada"
    },
    {
      "name": "Vivian Morrow",
      "phone": "(424) 844-7465",
      "email": "tincidunt.orci@outlook.ca",
      "postalZip": "S3G 2R2",
      "country": "Sweden"
    },
    {
      "name": "Ivor Dickerson",
      "phone": "(293) 477-0901",
      "email": "nec.urna@yahoo.ca",
      "postalZip": "188646",
      "country": "Canada"
    },
    {
      "name": "Mary Goff",
      "phone": "1-692-503-1348",
      "email": "proin.dolor@yahoo.edu",
      "postalZip": "713453",
      "country": "Canada"
    },
    {
      "name": "Stephen Lucas",
      "phone": "(242) 818-4787",
      "email": "imperdiet.non.vestibulum@google.org",
      "postalZip": "6348",
      "country": "Poland"
    },
    {
      "name": "Jakeem Hess",
      "phone": "1-872-387-4219",
      "email": "amet.dapibus.id@outlook.net",
      "postalZip": "49344",
      "country": "Indonesia"
    },
    {
      "name": "Aladdin Larsen",
      "phone": "1-214-853-8104",
      "email": "curabitur@google.org",
      "postalZip": "587188",
      "country": "Russian Federation"
    },
    {
      "name": "Aidan Mathis",
      "phone": "1-458-338-8643",
      "email": "luctus.sit@google.ca",
      "postalZip": "4913",
      "country": "Mexico"
    },
    {
      "name": "Tashya Pace",
      "phone": "1-675-866-0653",
      "email": "sem.pellentesque@outlook.edu",
      "postalZip": "772443",
      "country": "Sweden"
    },
    {
      "name": "Maggy Cruz",
      "phone": "1-527-435-3069",
      "email": "pharetra.nibh@icloud.net",
      "postalZip": "3863",
      "country": "Austria"
    },
    {
      "name": "Knox Cote",
      "phone": "(738) 159-7083",
      "email": "vel.vulputate@protonmail.couk",
      "postalZip": "792556",
      "country": "Ireland"
    },
    {
      "name": "Jaime Dorsey",
      "phone": "(655) 323-3181",
      "email": "consectetuer.euismod@outlook.com",
      "postalZip": "3563",
      "country": "United Kingdom"
    },
    {
      "name": "Uriah England",
      "phone": "(948) 872-5124",
      "email": "neque.et.nunc@yahoo.com",
      "postalZip": "7579",
      "country": "Pakistan"
    },
    {
      "name": "Driscoll Austin",
      "phone": "1-178-264-4816",
      "email": "orci@hotmail.org",
      "postalZip": "8107",
      "country": "Russian Federation"
    },
    {
      "name": "Brian Cunningham",
      "phone": "(446) 712-1478",
      "email": "imperdiet.ornare@protonmail.net",
      "postalZip": "519213",
      "country": "Nigeria"
    },
    {
      "name": "Valentine White",
      "phone": "1-566-526-1486",
      "email": "lobortis.class@yahoo.net",
      "postalZip": "37466",
      "country": "Singapore"
    },
    {
      "name": "Ifeoma Hubbard",
      "phone": "(839) 243-1507",
      "email": "quisque.ac.libero@aol.net",
      "postalZip": "27873",
      "country": "Belgium"
    },
    {
      "name": "Ivana Mcintyre",
      "phone": "1-269-223-6088",
      "email": "quis.turpis@yahoo.couk",
      "postalZip": "585948",
      "country": "France"
    },
    {
      "name": "Leslie Welch",
      "phone": "(319) 558-5668",
      "email": "habitant.morbi.tristique@google.edu",
      "postalZip": "45752",
      "country": "Philippines"
    },
    {
      "name": "Aquila Chandler",
      "phone": "(975) 767-4810",
      "email": "cubilia.curae@protonmail.org",
      "postalZip": "8171 BG",
      "country": "Sweden"
    },
    {
      "name": "Otto Kirkland",
      "phone": "1-147-783-0711",
      "email": "ipsum@hotmail.net",
      "postalZip": "9622",
      "country": "Indonesia"
    },
    {
      "name": "Idola Espinoza",
      "phone": "(226) 298-2192",
      "email": "vel.arcu.curabitur@google.net",
      "postalZip": "3517",
      "country": "Brazil"
    },
    {
      "name": "Madonna Marsh",
      "phone": "(288) 747-5365",
      "email": "malesuada.ut.sem@google.edu",
      "postalZip": "7457",
      "country": "Spain"
    },
    {
      "name": "Malachi Hahn",
      "phone": "1-319-651-5544",
      "email": "enim@aol.ca",
      "postalZip": "50622-73875",
      "country": "Indonesia"
    },
    {
      "name": "Hasad Barrett",
      "phone": "(385) 915-1497",
      "email": "aliquet.vel@outlook.org",
      "postalZip": "436288",
      "country": "Ireland"
    },
    {
      "name": "Whilemina Stafford",
      "phone": "1-647-334-7727",
      "email": "lorem.semper@hotmail.ca",
      "postalZip": "757741",
      "country": "France"
    },
    {
      "name": "Jasmine Cruz",
      "phone": "(426) 808-7817",
      "email": "etiam.bibendum@protonmail.org",
      "postalZip": "YT45 5MF",
      "country": "Spain"
    },
    {
      "name": "George Franklin",
      "phone": "(441) 378-6227",
      "email": "eu.erat@google.com",
      "postalZip": "51047",
      "country": "Russian Federation"
    },
    {
      "name": "Brennan Lott",
      "phone": "1-313-299-7888",
      "email": "et.netus.et@aol.ca",
      "postalZip": "47357-67343",
      "country": "Nigeria"
    }
  ];
}
