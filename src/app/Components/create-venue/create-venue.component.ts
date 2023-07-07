import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Venue } from 'src/app/Model/venue.model';
import { VenueService } from 'src/app/Services/venue.service';

@Component({
  selector: 'app-create-venue',
  templateUrl: './create-venue.component.html',
  styleUrls: ['./create-venue.component.css']
})
export class CreateVenueComponent implements OnInit {
  venue: Venue = new Venue();
  constructor(private VenueService: VenueService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  saveVenue() {
    this.VenueService.CreateVenue(this.venue).subscribe(data =>{ 
      console.log(data);
      this.goToVenueList();
      
  },
     error => console.log(error));

  }
  goToVenueList(){
    this.router.navigate(['/venues']);
  }

  onSubmit(){
    console.log(this.venue);
    this.saveVenue();

  }
}
