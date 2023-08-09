import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from "./contacts/contacts.component";
import {HeaderComponent} from "./header/header.component";
import {AddContactComponent} from "./add-contact/add-contact.component";

const routes: Routes = [];

const routeConfig: Routes = [
  {
    path: '',
    component: ContactsComponent,
    title: 'contacts page'
  },
  {
    path: '',
    component: HeaderComponent,
    title: 'header page'
  },
  {
    path: '',
    component: AddContactComponent,
    title: 'add contact page'
  },
];
export default routeConfig;
