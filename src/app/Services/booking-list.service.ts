import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../Model/booking.Model';

@Injectable({
  providedIn: 'root'
})



export class BookingListService {
  //  getBookingURL:string;
  //  addBookingURL:string;
  //  getBookingBybookingIdURL
  private baseURL="http://localhost:9090/api/booking";
  constructor(private httpClient:HttpClient) { 
  //  this.getBookingURL="http://localhost:9090/api/booking/getAllBookings";
  //  this.addBookingURL="http://localhost:9090/api/booking/addBooking";
  //  this.getBookingBybookingIdURL="http://localhost:9090/api/booking/getBookingByBookingId/{bookingId}"
 }
 getBookingList():Observable<Booking[]>{
   return this.httpClient.get<Booking[]>(`${this.baseURL}/getAllBookings`);
 }
 createBooking(booking: Booking): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}/addBooking`,booking);
}
getBookingBybookingId(bookingId: number): Observable<Booking>{
  return this.httpClient.get<Booking>(`${this.baseURL}/getBookingByBookingId/${bookingId}`);

}
updateBooking(bookingId: number, booking: Booking): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/updateBooking/${bookingId}`, booking);
}

deleteBooking(bookingId: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/deleteBookingByBookingId/${bookingId}`);
}

}
