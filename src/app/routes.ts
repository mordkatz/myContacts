import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from "./contacts/contacts.component";
const routes: Routes = [];

const routeConfig: Routes = [
  {
    path: '',
    component: ContactsComponent,
    title: 'contacts page'
  },
];
export default routeConfig;
