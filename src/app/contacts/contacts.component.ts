import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactsService} from "../app.contacts.services";
import {HttpClientModule} from "@angular/common/http";
import {ContactInterface} from "../contact-interface";

@Component({
  selector: 'app-contacts',
  standalone: true,
  providers: [ContactsService],
  imports:[
    CommonModule, HttpClientModule
  ],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit {
  title = 'Home page'
  data:any;
  constructor(private contactService: ContactsService){}
  ngOnInit() {
    this.contactService.getContacts().subscribe(
      (data) => {
        // Process the data received from the API
        this.data = data; // Store the received data in a component variable
      },
      (error) => {
        // Handle errors if any
        console.error('Error fetching data:', error);
      }
    );
  }
}
