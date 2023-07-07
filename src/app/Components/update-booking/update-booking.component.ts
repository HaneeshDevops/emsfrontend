import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/Model/booking.Model';
import { BookingListService } from 'src/app/Services/booking-list.service';


@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent {
  bookingId?: number ;
  booking: Booking=new Booking();
  constructor(private bookingService: BookingListService,
    private route: ActivatedRoute,
    private router: Router){}
    ngOnInit(): void {
      this.bookingId = this.route.snapshot.params['id'] as number;
  
      this.bookingService.getBookingBybookingId(this.bookingId).subscribe(data => {
       this.booking = data;
      }, error => console.log(error));
    }
    // ngOnInit(): void {
    //   const id = this.route.snapshot.params['id'];
    //   if (!isNaN(id)) {
    //     this.bookingId = +id;
    //     this.bookingService.getBookingBybookingId(this.bookingId).subscribe(data => {
    //       this.booking = data;
    //     }, error => console.log(error));
    //   }
    
    
    
    // onSubmit(){
    //   this.bookingService.updateBooking(this.bookingId, this.booking).subscribe( data =>{
    //     this.goToBookingList();
    //   }
    //   , error => console.log(error));
    // }
    onSubmit(){
      if (this.bookingId) {
        this.bookingService.updateBooking(this.bookingId, this.booking).subscribe( data =>{
          this.goToBookingList();
        }
        , error => console.log(error));
      }
    }
    goToBookingList(){
      this.router.navigate(['/booking']);
    }
}
