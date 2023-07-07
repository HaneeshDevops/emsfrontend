import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venue } from '../Model/venue.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  private baseURL = "http://localhost:9090/api/venue";
  constructor(private httpClient: HttpClient) { }
  CreateVenue(venue: Venue): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/addVenue`, venue);

  }
}
