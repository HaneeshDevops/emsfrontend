import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../Model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseURL = "http://localhost:9090/api/event";
  constructor(private httpClient: HttpClient) { }

  createEvent(event: Event): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addEvent`, event);
  }
}
