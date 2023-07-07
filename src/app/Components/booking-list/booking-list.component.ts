import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/Model/booking.Model';
import { BookingListService } from 'src/app/Services/booking-list.service';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit{
bookings:Booking[]=[];
constructor(private bookingService:BookingListService,private router: Router){}
 ngOnInit(): void {

  this.getBookings();
}

private getBookings(){
   this.bookingService.getBookingList().subscribe(data => {
    this.bookings = data;
    });
}
updateBooking(bookingId:number){
  this.router.navigate(['update-booking', bookingId]);
}
// updateBooking(bookingId:number){
//   if(bookingId) {
//     this.router.navigate(['update-booking', bookingId]);
//   }
// }

// deleteBooking(bookingId: number){
//   this.bookingService.deleteBooking(bookingId).subscribe( data => {
//     console.log(data);
//     this.getBookings();
//   })
deleteBooking(bookingId?: number){
  if (bookingId) {
    this.bookingService.deleteBooking(bookingId).subscribe( data => {
      console.log(data);
      this.getBookings();
    });

}
}
  
}


// private getBookings(): void {
//   this.bookingService.getBookingList().subscribe(
//     (data: Booking[]) => {
//       this.bookings = data;
//     },
//     (error: any) => {
//       console.log('Error fetching bookings', error);
//     }
//   );
// }
// }
