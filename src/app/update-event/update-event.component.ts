import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
})
export class UpdateEventComponent implements OnInit {
  currentEvent = new Event();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router ,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    console.log(this.currentEvent);
    this.currentEvent = this.eventService.consultEvent(
      this.activatedRoute.snapshot.params.id
    );
  }

  updateEvent() {
    //console.log(this.currentEvent);
    this.eventService.updateEvent(this.currentEvent);
    this.router.navigate(['eventList'])
  }
}
