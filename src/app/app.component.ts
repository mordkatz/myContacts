import { Component } from '@angular/core';
import {ContactsComponent} from "./contacts/contacts.component";
import {HeaderComponent} from "./header/header.component";
import {AddContactComponent} from "./add-contact/add-contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  //templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  imports:[
    ContactsComponent, HeaderComponent, AddContactComponent,
  ],
  template: `
  <main>
    <div>
      <app-add-contact></app-add-contact>
    </div>
    <div>
      <app-header></app-header>
    </div>
    <app-contacts></app-contacts>
  </main>
  `,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'my-contacts';
}
