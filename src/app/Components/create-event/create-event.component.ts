import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/Model/event.model';
import { EventService } from 'src/app/Services/event.service';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit{
  event: Event= new Event();
  constructor(private eventServive: EventService,
    private router: Router){}
    ngOnInit(): void {
    
    }
    saveEvent(){
      this.eventServive.createEvent(this.event).subscribe(data =>{
        console.log(data);
        this.goToEventList();
      },
      error => console.log(error));
      
    }
    goToEventList(){
      this.router.navigate(['/events']);
  
    }
    onSubmit(){
      console.log(this.event);
      this.saveEvent();
  
    }

}
