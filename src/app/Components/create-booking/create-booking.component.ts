import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/Model/booking.Model';
import { BookingListService } from 'src/app/Services/booking-list.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
booking:Booking=new Booking();
constructor(private bookingService:BookingListService,private router:Router){}
ngOnInit():void{
}
saveBooking(){
  this.bookingService.createBooking(this.booking).subscribe( data =>{
    console.log(data);
    this.goToBookingList();
  },
  error => console.log(error));
}
goToBookingList(){
  this.router.navigate(['/booking']);
}

  onSubmit(){
    console.log(this.booking);
   this.saveBooking();
  
}
}
