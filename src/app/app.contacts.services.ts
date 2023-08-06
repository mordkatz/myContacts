import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from "rxjs";
import { catchError, retry} from "rxjs/operators";
import {comment} from "postcss";

@Injectable()
export class ContactsService {
  private apiUrl = 'http://localhost:8080/demo'; // Replace with your Spring Boot backend URL

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(`${this.apiUrl}/all`);
  }
}
