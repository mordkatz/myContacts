import { Component } from '@angular/core';
import {ContactsComponent} from "./contacts/contacts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  //templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  imports:[
    ContactsComponent,
  ],
  template: `
  <main>
    <div>
      Hello World
    </div>
    <section class="content">
      <app-contacts></app-contacts>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'my-contacts';
}
