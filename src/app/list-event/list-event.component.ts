import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'],
})
export class ListEventComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService:EventService) {
    this.events = this.eventService.getEvents();
  }

  ngOnInit(): void {
  }
  deleteEvent(event :Event){
   // console.log(event);
   let conf = confirm("Etes-vous sûr ?");
  if (conf)
   this.eventService.deleteEvent(event);

  }
}
